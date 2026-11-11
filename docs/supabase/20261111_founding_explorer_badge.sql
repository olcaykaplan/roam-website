-- ════════════════════════════════════════════════════════════════════════════
-- Kurucu Kâşif rozeti — UYGULANMADI, onayını bekliyor.
--
-- Ne yapar:
--   • Uygulamaya katılan ilk 50 kişiye sıra numaralı (#1–#50) "Kurucu Kâşif" rozeti verir.
--   • Limit app_settings.founder_badge_limit içinde (varsayılan 50). Dolunca kimseye verilmez.
--   • Mevcut 3 profile geriye dönük VERİLMEZ (test hesapların numara harcamasın).
--   • Rozeti kazanmamış kullanıcı onu kilitli olarak bile görmez.
--   • get_badge_progress artık "serial" (rozet numarası) da döndürür.
--   • founder_badges_remaining(): web sitesindeki "son N rozet" sayacı için kalan sayı.
--
-- Nasıl uygulanır (birini seç):
--   a) Supabase Dashboard → SQL Editor → bu dosyanın tamamını yapıştır → Run
--   b) Uygulama reposunda supabase/migrations/ altına kopyala → supabase db push
--   c) Claude'a "migration'ı uygula" de — Supabase bağlantısıyla uygular
--
-- Tek transaction: bir adım hata verirse hiçbiri uygulanmaz.
-- Geri alma notu en altta.
-- ════════════════════════════════════════════════════════════════════════════

begin;

-- 1) Rozet sıra numarası
alter table public.user_badges add column if not exists serial smallint;
create unique index if not exists user_badges_badge_serial_key
  on public.user_badges (badge_id, serial) where serial is not null;

-- 2) Limit ayarı (tek yerden değişir)
insert into public.app_settings (key, value)
values ('founder_badge_limit', '50'::jsonb)
on conflict (key) do nothing;

-- 3) Rozet + 4 dil çevirisi ('special' tipi; award_badges bu türü yok sayar)
insert into public.badges (slug, name, description, icon_emoji, pin_color, trigger_type, trigger_value, family, tier)
values (
  'founding-explorer', 'Founding Explorer',
  'One of Roam''s first 50 explorers. Numbered, and never awarded again.',
  '🧭', '#F59E0B', 'special', '{"kind": "founder"}'::jsonb, 'founder', 1
)
on conflict (slug) do nothing;

insert into public.badge_translations (badge_id, lang, name, description)
select b.id, v.lang, v.name, v.description
from public.badges b
cross join (values
  ('en', 'Founding Explorer', 'One of Roam''s first 50 explorers. Numbered, and never awarded again.'),
  ('tr', 'Kurucu Kâşif', 'Roam''ın ilk 50 kâşifinden biri. Numaralı; bir daha asla verilmeyecek.'),
  ('es', 'Explorador Fundador', 'Uno de los primeros 50 exploradores de Roam. Numerada y nunca se volverá a otorgar.'),
  ('de', 'Gründungs-Entdecker', 'Einer der ersten 50 Entdecker von Roam. Nummeriert und wird nie wieder vergeben.')
) as v(lang, name, description)
where b.slug = 'founding-explorer'
on conflict (badge_id, lang) do nothing;

-- 4) Yeni profilde rozeti sıradaki numarayla ver. Advisory lock eşzamanlı kayıtlarda
--    aynı numaranın iki kişiye gitmesini önler; hata olursa kayıt (signup) asla bozulmaz.
create or replace function public.award_founder_badge()
returns trigger
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_badge uuid;
  v_limit int;
  v_next  int;
begin
  select id into v_badge from badges where slug = 'founding-explorer';
  if v_badge is null then
    return new;
  end if;

  select (value #>> '{}')::int into v_limit from app_settings where key = 'founder_badge_limit';
  v_limit := coalesce(v_limit, 50);

  perform pg_advisory_xact_lock(hashtext('roam:founding-explorer'));

  select coalesce(max(serial), 0) + 1 into v_next
  from user_badges where badge_id = v_badge;

  if v_next > v_limit then
    return new;
  end if;

  insert into user_badges (user_id, badge_id, serial)
  values (new.id, v_badge, v_next)
  on conflict (user_id, badge_id) do nothing;

  return new;
exception when others then
  raise warning 'award_founder_badge failed for %: %', new.id, sqlerrm;
  return new;
end;
$function$;

revoke all on function public.award_founder_badge() from public, anon, authenticated;

drop trigger if exists profiles_award_founder on public.profiles;
create trigger profiles_award_founder
  after insert on public.profiles
  for each row execute function public.award_founder_badge();

-- 5) Web sitesi için: kalan rozet sayısı (yalnızca sayı döner, kişisel veri yok)
create or replace function public.founder_badges_remaining()
returns integer
language sql
stable
security definer
set search_path to 'public'
as $function$
  select greatest(
    0,
    coalesce((select (value #>> '{}')::int from app_settings where key = 'founder_badge_limit'), 50)
    - coalesce((
        select max(ub.serial)
        from user_badges ub
        join badges b on b.id = ub.badge_id
        where b.slug = 'founding-explorer'
      ), 0)
  )::int;
$function$;

revoke all on function public.founder_badges_remaining() from public;
grant execute on function public.founder_badges_remaining() to anon, authenticated, service_role;

-- 6) Rozet ilerlemesi: numarayı (serial) döndür; Kurucu Kâşif'i kazanmamış kullanıcıya
--    hiç gösterme. Dönüş tipi değiştiği için drop + create; yetkiler eskisiyle birebir aynı
--    (authenticated + service_role; anon yok).
drop function public.get_badge_progress(text);

create function public.get_badge_progress(p_lang text default 'en'::text)
returns table(
  badge_id uuid, slug text, name text, description text, icon_emoji text, pin_color text,
  family text, tier smallint, trigger_type text, target_count integer, current_count integer,
  earned boolean, earned_at timestamp with time zone, family_max_tier smallint, serial smallint
)
language sql
stable
set search_path to 'public', 'extensions'
as $function$
  with completed as (
    select distinct qc.quest_id
    from quest_completions qc
    where qc.user_id = auth.uid()
  ),
  calc as (
    select
      b.*,
      case
        when b.trigger_type in ('completion_count', 'tag_count', 'category_count', 'country_count', 'city_count')
          then (b.trigger_value->>'count')::int
        when b.trigger_value->>'kind' = 'approved_submissions'
          then (b.trigger_value->>'count')::int
        else 1
      end as target,
      case b.trigger_type
        when 'quest_specific' then
          (select count(*) from completed c
           where c.quest_id = (b.trigger_value->>'quest_id')::uuid)::int
        when 'city_first' then
          least(1, (select count(*) from completed c
                    join quests q on q.id = c.quest_id
                    where q.city_id = b.trigger_value->>'city_id'))::int
        when 'city_count' then
          (select count(*) from completed c
           join quests q on q.id = c.quest_id
           where q.city_id = b.trigger_value->>'city_id')::int
        when 'completion_count' then
          (select count(*) from completed)::int
        when 'tag_count' then
          (select count(*) from completed c
           join quest_tags qt on qt.quest_id = c.quest_id
           where qt.tag_id = b.trigger_value->>'tag')::int
        when 'category_count' then
          (select count(*) from completed c
           join quest_categories qc2 on qc2.quest_id = c.quest_id
           where qc2.category_id = b.trigger_value->>'category')::int
        when 'country_count' then
          (select count(distinct ci.country_id) from completed c
           join quests q on q.id = c.quest_id
           join cities ci on ci.id = q.city_id)::int
        when 'special' then
          case when b.trigger_value->>'kind' = 'approved_submissions' then
            (select count(*) from quest_submissions s
             where s.submitter_id = auth.uid() and s.status = 'approved')::int
          else 0 end
        else 0
      end as cur,
      case b.trigger_type
        when 'quest_specific' then
          (select count(*) from quests q
           where q.is_active and q.id = (b.trigger_value->>'quest_id')::uuid)::int
        when 'city_first' then
          (select count(*) from quests q
           where q.is_active and q.city_id = b.trigger_value->>'city_id')::int
        when 'city_count' then
          (select count(*) from quests q
           where q.is_active and q.city_id = b.trigger_value->>'city_id')::int
        when 'tag_count' then
          (select count(*) from quest_tags qt
           join quests q on q.id = qt.quest_id and q.is_active
           where qt.tag_id = b.trigger_value->>'tag')::int
        when 'category_count' then
          (select count(*) from quest_categories qc2
           join quests q on q.id = qc2.quest_id and q.is_active
           where qc2.category_id = b.trigger_value->>'category')::int
        when 'completion_count' then
          (select count(*) from quests q where q.is_active)::int
        else null
      end as available
    from badges b
  )
  select
    c.id,
    c.slug,
    coalesce(bt.name, c.name)                as name,
    coalesce(bt.description, c.description)  as description,
    c.icon_emoji,
    c.pin_color,
    c.family,
    c.tier,
    c.trigger_type,
    c.target                                 as target_count,
    c.cur                                    as current_count,
    ub.badge_id is not null                  as earned,
    ub.earned_at,
    max(c.tier) over (partition by coalesce(c.family, c.slug)) as family_max_tier,
    ub.serial
  from calc c
  left join badge_translations bt on bt.badge_id = c.id and bt.lang = p_lang
  left join user_badges ub on ub.badge_id = c.id and ub.user_id = auth.uid()
  where (ub.badge_id is not null or c.available is null or c.available >= c.target)
    and not (c.trigger_value->>'kind' = 'founder' and ub.badge_id is null)
  order by (ub.badge_id is not null) desc, c.family nulls last, c.tier, c.name;
$function$;

revoke all on function public.get_badge_progress(text) from public, anon;
grant execute on function public.get_badge_progress(text) to authenticated, service_role;

commit;

-- ── Geri alma (gerekirse) ──────────────────────────────────────────────────
-- drop trigger if exists profiles_award_founder on public.profiles;
-- drop function if exists public.award_founder_badge();
-- drop function if exists public.founder_badges_remaining();
-- delete from public.badges where slug = 'founding-explorer';   -- çeviriler ve user_badges cascade ile silinir
-- delete from public.app_settings where key = 'founder_badge_limit';
-- (get_badge_progress'in serial'lı hâli zararsızdır, kalabilir.)
