import type { APIContext } from "astro"
import { languagePaths, routeLocale } from "@/data/languages"
import { buildFeed } from "@/lib/feed"

export const getStaticPaths = languagePaths
export const GET = ({ params, site }: APIContext) => buildFeed(routeLocale(params.lang), site)
