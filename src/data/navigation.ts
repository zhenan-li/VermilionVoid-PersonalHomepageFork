import { localizedLink, type Locale } from "./languages"
const pages = [
  { en: "Writing", zh: "文章", path: "/#home-main" },
  { en: "Archive", zh: "归档", path: "/timeline/" },
  { en: "Timeline", zh: "经历", path: "/journey/" },
  { en: "Projects", zh: "项目", path: "/projects/" },
  { en: "CV", zh: "简历", path: "/cv/" },
]
export function navigation(locale: Locale): { name: string; href: string; external?: boolean }[] {
  return pages.map(page => ({ name: page[locale], href: localizedLink(page.path, locale) }))
}
