import { getSortedPosts, type PostEntry } from "./posts"
import { defaultLocale, languages, type Locale } from "@/data/languages"

export function articleLanguage(post: PostEntry): Locale {
  const raw = post.data.lang || defaultLocale
  const lang = raw.toLowerCase().split("-")[0]
  if (!languages.includes(lang as Locale)) throw new Error("Unsupported article language: " + raw + " in " + post.id)
  return lang as Locale
}
export const articleKey = (post: PostEntry) => post.data.translationKey || post.id

export async function editions(locale: Locale, chronological = false) {
  const groups = new Map<string, Partial<Record<Locale, PostEntry>>>()
  for (const post of await getSortedPosts(chronological)) {
    const key = articleKey(post)
    const group = groups.get(key) ?? {}
    const lang = articleLanguage(post)
    if (group[lang]) throw new Error("Duplicate " + lang + " article for translationKey: " + key)
    group[lang] = post
    groups.set(key, group)
  }
  const selected = Array.from(groups, ([key, group]) => {
    const post = (group[locale] || group.en || group.zh)!
    return { key, post, translated: !!(group.en && group.zh) }
  })
  return selected.sort((a, b) =>
    (chronological ? 0 : Number(b.post.data.pinned) - Number(a.post.data.pinned)) ||
    b.post.data.published.valueOf() - a.post.data.published.valueOf() || a.key.localeCompare(b.key))
}
