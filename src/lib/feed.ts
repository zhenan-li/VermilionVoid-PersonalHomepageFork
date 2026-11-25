import rss from "@astrojs/rss"
import MarkdownIt from "markdown-it"
import sanitizeHtml from "sanitize-html"
import { editions } from "@/lib/editions"
import { siteName, siteDescription, type Locale } from "@/data/languages"


const parser = new MarkdownIt()
const FULL_CONTENT_LIMIT = 10

function stripInvalidXmlChars(str: string): string {
  return str.replace(
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
    "",
  )
}

export async function buildFeed(lang: Locale, site?: URL) {
  const posts = await editions(lang, true)
  const publicPosts = posts.filter(({post}) => !post.data.encrypted)

  return rss({
    title: siteName[lang],
    description: siteDescription[lang],
    site: site ?? "https://example.com",
    items: publicPosts.map(({key, post}, index) => {
      const content = typeof post.body === "string" ? post.body : String(post.body || "")
      const cleanedContent = stripInvalidXmlChars(content)
      const item = {
        title: post.data.title,
        pubDate: post.data.published,
        description: post.data.description || "",
        link: `/${lang}/posts/${key}/`,
      }

      if (index >= FULL_CONTENT_LIMIT) return item

      return {
        ...item,
        content: sanitizeHtml(parser.render(cleanedContent), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
      }
    }),
    customData: "<language>" + lang + "</language>",
  })
}
