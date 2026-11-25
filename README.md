# VermilionVoid 双语个人网站模板

**简体中文** · [English](README.en.md)

## 本 Fork 的改进

- **[中英文界面与双语文章](#双语文章)**。两种语言各有可分享的网址。文章的不同语言版本通过 `translationKey` 关联，仅有一种版本时会显示原文。
- **[按访问地区选择首页语言](#语言和访问入口)**。默认英文。部署到 Vercel 后，首次打开首页可按 IP 所在地区切换为中文。访客随时可以手动切换，之后优先使用记住的选择。
- **[双语个人时间线](#个人经历时间线)**。按年展示经历，支持单日事件、起止日期、进行中的事项，以及文章和项目链接。附带中文版和英文版演示，样例数据见 [`journey.example.json`](src/data/journey.example.json)。
- **[可直接复用的个人主页](#其他配置与部署)**。提供博客、个人时间线、项目和简历页。作者资料与个人条目默认留空，博客附带一篇 Hello World 测试文章。

基于 [VermilionVoid（朱墨留白）](https://github.com/Lapis0x0/VermilionVoid) 的 Astro 模板。上游文章版权归原作者，许可说明见[上游 README](https://github.com/Lapis0x0/VermilionVoid#许可)。

## 快速开始

使用 Node.js 24 和 pnpm。运行 `pnpm install --frozen-lockfile` 安装依赖，`pnpm dev` 启动开发服务器，`pnpm build` 生成静态页面和 Pagefind 搜索索引，`pnpm preview` 查看发布版。

## 语言和访问入口

`/en/` 和 `/zh/` 都是可以直接分享的地址。导航栏的语言按钮会打开当前页面的另一版，保留查询参数和锚点，并通过 `site_lang` Cookie 保存选择一年。

在 Vercel 部署后，访客打开 `/` 时会优先使用手动选择。首次访问时，`vercel.json` 按 Vercel 提供的 `x-vercel-ip-country` 地区码将 CN、HK、MO、TW 导向中文。其余地区和地区未知时使用默认语言，初始为英文。地区规则只作用于 `/`。本地预览及普通静态托管使用手动选择或默认语言。要调整映射，编辑 `vercel.json` 的地区规则；要改默认语言，编辑 `src/data/languages.ts` 的 `defaultLocale`。

## 双语文章

把 Markdown 或 MDX 放在 `src/content/posts/`。可以先发表一种语言，再补另一版。以测试文章为例，两个文件可以叫 `hello-world.md` 和 `hello-world.zh.md`，各自拥有独立的正文、标题、描述、分类和标签。英文文件的文件头如下。

```yaml
---
title: Hello World
published: 2026-11-24
lang: en
translationKey: hello-world
---
```

中文版本使用 `lang: zh` 和中文标题，并保留相同的 `translationKey`。两个版本共用 URL 中的文章标识，列表、归档和各语言的 RSS 每篇只显示一次。只有一种版本时，另一种语言的界面会显示原文和语言提示。未填写 `lang` 的旧文章按默认语言处理，未填写 `translationKey` 时采用文章文件的内容 ID。每个标识在同一语言下只能有一个公开版本。设为 `draft: true` 的版本不会发布，生产构建会继续使用已有的公开版本。

## 个人经历时间线

模板附带中英文演示页 `/zh/journey/demo/` 和 `/en/journey/demo/`。三个虚构节点展示单日事件、起止日期和进行中的事项。可以从空时间线进入演示页，或直接分享演示页链接。

要填写自己的经历，可以参考 `src/data/journey.example.json` 中的示例，编辑 `src/data/journey.json`。空数组 `[]` 对应空时间线。填写后，`/en/journey/` 和 `/zh/journey/` 会按起始日期倒序、按年分组。文章归档位于各语言的 `/timeline/`。

| 字段 | 用法 |
| --- | --- |
| `date` | 必填，起始日期，格式为 `YYYY-MM-DD` |
| `title` | 必填，可写成 `{ "en": "…", "zh": "…" }` |
| `end` | 可选，结束日期或 `"ongoing"` |
| `description` | 可选，和标题使用相同的双语格式 |
| `id` | 可选且唯一，用于分享 `/en/journey/#你的标识` |
| `links` | 可选数组，每项包含 `label` 和 `href`，支持关联项目、文章及外部链接 |

标题、说明、链接文字都可以只填一种语言，或使用两种语言共用的字符串。

## 其他配置与部署

- 要显示作者卡片，在 `src/data/profile.ts` 中填写姓名、简介、头像或社交链接。留空时页面会隐藏作者卡片。站名和站点描述在 `src/data/languages.ts`，导航在 `src/data/navigation.ts`。
- 项目在 `src/data/projects.ts`，简历页在 `src/pages/[lang]/cv.astro`。
- Vercel 使用仓库的 `vercel.json` 构建。生产域名默认读取 `VERCEL_PROJECT_PRODUCTION_URL`。绑定自定义域名后，设置完整的 `SITE_URL`（含 `https://`）并重新部署，即可更新规范链接、RSS 和站点地图。
