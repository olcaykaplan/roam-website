# Blog Yazısı Yayınlama Rehberi

Yeni yazı yayınlamak **tek dosya eklemekten** ibaret. Panel yok, veritabanı yok.

## Adımlar

1. Dosyayı oluştur:
   - Türkçe yazı → `src/content/blog/tr/yazi-slugi.md`
   - İngilizce yazı → `src/content/blog/en/post-slug.md`
   - İspanyolca yazı → `src/content/blog/es/`, Almanca yazı → `src/content/blog/de/`
   - **Dosya adı = URL.** `tr/kadikoy-sakli-yerler.md` → `site.com/blog/kadikoy-sakli-yerler`
2. En üste frontmatter'ı koy (aşağıda).
3. Altına Markdown ile yazını yaz.
4. `git add . && git commit -m "yeni yazı" && git push` → site otomatik yayınlanır.

## Frontmatter şablonu

```yaml
---
title: "Başlık — en fazla 70 karakter (Google kesmesin)"
description: "Google'da başlığın altında görünecek özet. 70-165 karakter arası ZORUNLU."
pubDate: 2026-07-15
tags: ["İstanbul", "gezi rotası"]
translationKey: benzersiz-anahtar   # yalnızca çevirisi varsa; tüm dillerde AYNI değer
draft: false                        # true → yazı siteye çıkmaz (taslak)
---
```

- `translationKey`: Aynı yazının farklı dillerdeki (TR/EN/ES/DE) versiyonlarını birbirine bağlar (Google'a
  "bu ikisi aynı içeriğin çevirisi" der — hreflang). Çeviri yoksa hiç yazma.
- `draft: true` ile taslak tutabilirsin; build'e girmez.
- Build, kurallara uymayan frontmatter'ı **hata vererek** reddeder (ör. 165 karakterden
  uzun description) — yani yanlış yayınlayamazsın.

## SEO yazım kuralları (her yazıda uygula)

1. **Tek H1 yok** — başlığı frontmatter'daki `title` üretir; gövdede `##` (H2) ile başla.
2. **Hedef kelime:** Yazıya başlamadan "insanlar Google'a ne yazar?" diye düşün
   (ör. "kadıköy gezilecek yerler"). Bu ifade başlıkta, description'da ve ilk
   paragrafta doğal şekilde geçsin.
3. **Uzunluk:** 700+ kelime hedefle; listeler ve alt başlıklar (`##`, `###`) kullan.
4. **İç bağlantı:** Her yazıdan en az bir kez ana sayfaya (`/`) ve mümkünse başka bir
   blog yazısına link ver.
5. **CTA:** Yazının sonunda Roam'a bağla (şablondaki hazır CTA kutusu zaten her
   yazının altında otomatik çıkar; metin içinde de doğal bir bağlantı iyi olur).
6. **Tarih:** Yazıyı önemli ölçüde güncellersen frontmatter'a `updatedDate: 2026-08-01`
   ekle — Google tazeliği sever.

## Yazı fikirleri (SEO hedefli, kategori bazlı)

| Kalıp | Örnek |
| --- | --- |
| "{Şehir}'de gezilecek yerler" | Ankara'da Gezilecek Yerler: Yerlisinden 15 Durak |
| "{Semt} saklı yerler" | Balat'ta Saklı Yerler |
| "{Şehir} yürüyüş rotası" | İzmir Kordon'dan Asansör'e Yürüyüş Rotası |
| "{Şehir}'de bir hafta sonu" | Eskişehir'de Bir Hafta Sonu |
| Kavramsal | Şehir Fotoğrafçılığına Başlangıç, Yalnız Seyahat Rehberi |

Her yeni şehir görev paketi eklediğinde o şehir için 1-2 rota yazısı yayınla —
uygulama içeriğiyle blog birbirini besler.
