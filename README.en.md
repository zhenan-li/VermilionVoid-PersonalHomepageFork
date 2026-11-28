# VermilionVoid Bilingual Personal Website Template

[简体中文](README.md) · **English**

## What's new in this fork

- **[English and Chinese interface and posts](#bilingual-posts)**. Each language has shareable URLs. Post versions are linked by `translationKey`. When a version is missing, the site shows the available version.
- **[Region-based homepage language](#language-and-navigation)**. English is the default. On Vercel, a first visit to the homepage can redirect to Chinese based on the visitor's IP region. A manual language choice takes precedence on future visits.
- **[Bilingual personal timeline](#personal-timeline)**. Milestones are grouped by year, with support for single dates, date ranges, ongoing activities, and links to posts or projects. Both languages have a demo built from [`journey.example.json`](src/data/journey.example.json).
- **[Ready to use as a personal website](#customization-and-deployment)**. Includes a blog, personal timeline, projects, and CV. Profile fields and personal entries start empty, and the blog includes one Hello World test post.
- **[Adjustable typography and site links](#customization-and-deployment)**. Set homepage and article font sizes, add an email address, override the English and Chinese RSS links, and edit the footer theme link. The browser icon follows the avatar.

An Astro template based on [VermilionVoid](https://github.com/Lapis0x0/VermilionVoid). The original author retains copyright to the upstream posts. See the [upstream licensing notes](https://github.com/Lapis0x0/VermilionVoid#许可).

## Quick start

Use Node.js 24 and pnpm. Run `pnpm install --frozen-lockfile` to install dependencies and `pnpm dev` to start the development server. Run `pnpm build` to generate the static site and Pagefind search index, then `pnpm preview` to preview the build.

## Language and navigation

Both `/en/` and `/zh/` can be shared directly. The language switch in the navigation opens the equivalent page, keeps the query string and fragment, and remembers the choice for one year in the `site_lang` cookie.

On Vercel, a saved language choice takes precedence at `/`. For first-time visitors, `vercel.json` uses Vercel's `x-vercel-ip-country` header to route CN, HK, MO, and TW to Chinese. Other or unknown regions use the configured default. This region rule applies only to `/`. A local preview or another static host uses the saved choice or the default. Edit `vercel.json` to change the region mapping and `defaultLocale` in `src/data/languages.ts` to change the default language.

## Bilingual posts

Put Markdown or MDX files in `src/content/posts/`. You can publish one language first and add the other later. For example, `hello-world.md` and `hello-world.zh.md` can each have their own body, title, description, category, and tags. The English example uses this frontmatter.

```yaml
---
title: Hello World
published: 2026-11-24
lang: en
translationKey: hello-world
---
```

Use `lang: zh` and a Chinese title for the Chinese version, keeping the same `translationKey`. Both versions share the same post identifier. Each language's list, archive, and RSS feed show one entry per post. When only one version exists, the other language displays it with a language notice. A missing `lang` uses the default language, and a missing `translationKey` uses the file's content ID. Each key can have one published version per language. A version marked `draft: true` stays out of production builds, which continue to use any available published version.

## Personal timeline

The demo pages at `/en/journey/demo/` and `/zh/journey/demo/` show three fictional milestones with a single date, a date range, and an ongoing activity. Open a demo from the empty timeline page or share its URL directly.

Use `src/data/journey.example.json` as a reference and edit `src/data/journey.json` to add your own milestones. An empty array `[]` gives you an empty timeline. The site sorts milestones by start date, newest first, and groups them by year on `/en/journey/` and `/zh/journey/`. The post archive is at `/timeline/` within each language.

| Field | Usage |
| --- | --- |
| `date` | Required start date in `YYYY-MM-DD` format |
| `title` | Required. Accepts `{ "en": "…", "zh": "…" }` |
| `end` | Optional end date or `"ongoing"` |
| `description` | Optional. Uses the same bilingual format as the title |
| `id` | Optional unique ID for links such as `/en/journey/#your-id` |
| `links` | Optional array of `label` and `href` pairs for projects, posts, or external URLs |

Titles, descriptions, and link labels can also use a single language or a shared string.

## Customization and deployment

- Set your author details in `src/data/profile.ts`. `email` adds a mail link to the author card and footer. `avatar` also supplies the browser icon, which falls back to `/mark.png` when left blank. Edit the site title and description in `src/data/languages.ts` and the navigation in `src/data/navigation.ts`.
- Use `src/data/site-settings.ts` to edit typography, RSS links, and the footer theme link. Each of the four font sizes uses `100` for the theme default, with separate values for the homepage headline, introduction, article title, and body.
- RSS readers poll a feed for new posts. The site builds feeds at `/en/rss.xml` and `/zh/rss.xml`. Set `rssSources.en` or `rssSources.zh` to override both the footer link and feed discovery for that language. Existing feed URLs continue to work.
- Edit projects in `src/data/projects.ts` and the CV page in `src/pages/[lang]/cv.astro`.
- Vercel builds the site using `vercel.json`. The production URL defaults to `VERCEL_PROJECT_PRODUCTION_URL`. If you connect a custom domain, set `SITE_URL` to its full URL, including `https://`, and redeploy to update canonical links, RSS feeds, and the sitemap.
