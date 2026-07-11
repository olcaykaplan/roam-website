import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog koleksiyonu: src/content/blog/{tr,en}/*.md
// Yeni yazı eklemek = ilgili dil klasörüne .md dosyası atmak. Başka hiçbir şey gerekmez.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(70, 'SEO: başlık 70 karakteri geçmesin'),
    description: z.string().min(70).max(165, 'SEO: açıklama 70-165 karakter arası olmalı'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Aynı yazının TR/EN çevirilerini eşleştirir (hreflang için).
    // İki dildeki karşılıklarında AYNI translationKey kullanılır. Çevirisi yoksa boş bırak.
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    author: z.string().default('Roam Ekibi'),
  }),
});

export const collections = { blog };
