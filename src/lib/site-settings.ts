import type { Locale } from "@/data/languages"
import { rssSources } from "@/data/site-settings"

export function rssHref(lang: Locale): string {
  return rssSources[lang].trim() || `/${lang}/rss.xml`
}
