export const languages = ["en", "zh"] as const
export type Locale = typeof languages[number]
export const defaultLocale: Locale = "en"
export type LocalText = string | { en: string; zh?: string } | { en?: string; zh: string }
export function localText(value: LocalText, locale: Locale): string {
  return typeof value === "string" ? value : value[locale] || value.en || value.zh || ""
}
export function routeLocale(value?: string): Locale {
  return value === "en" || value === "zh" ? value : defaultLocale
}
export function languagePaths() {
  return languages.map(lang => ({ params: { lang } }))
}
export function localizedLink(href: string, locale: Locale) {
  if (!/^\/(?:$|[?#]|(?:posts|timeline|journey|projects|cv|\d+)(?:[/?#]|$)|rss\.xml$)/.test(href)) return href
  return "/" + locale + href
}
export const siteName = { en: "Zhenan’s Notes", zh: "李哲楠的手记" }
export const siteDescription = { en: "Writing, projects and milestones by Zhenan Li.", zh: "李哲楠的文章、项目和个人经历。" }
