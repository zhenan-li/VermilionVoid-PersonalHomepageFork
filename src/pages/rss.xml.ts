import type { APIContext } from "astro"
import { defaultLocale } from "@/data/languages"
import { buildFeed } from "@/lib/feed"

export const GET = ({ site }: APIContext) => buildFeed(defaultLocale, site)
