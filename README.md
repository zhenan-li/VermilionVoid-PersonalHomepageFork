# 李哲楠的手记

基于 [VermilionVoid（朱墨留白）](https://github.com/Lapis0x0/VermilionVoid) 的个人博客。保留主题署名。上游文章版权归原作者，许可说明见[上游 README](https://github.com/Lapis0x0/VermilionVoid#许可)。

使用 Node.js 24 和 pnpm。运行 `pnpm install --frozen-lockfile`、`pnpm dev` 开发，`pnpm build` 生成页面和 Pagefind 索引，`pnpm preview` 查看发布版。

- 写文章放在 `src/content/posts/`。复制已有文章的文件头即可开始。
- 更新经历编辑 `src/data/journey.json`，日期格式为 YYYY-MM-DD。链接数组可留空。
- 添加项目编辑 `src/data/projects.ts`。简历编辑 `src/pages/cv.astro`。
- 修改个人资料编辑 `src/data/profile.ts`，修改导航编辑 `src/data/navigation.ts`。

Vercel 构建使用仓库的 `vercel.json`。生产域名默认读取 `VERCEL_PROJECT_PRODUCTION_URL`。绑定自定义域名后，给构建环境设置完整的 `SITE_URL`（含 https://）并重新部署，即可更新 RSS 和站点地图。评论区默认关闭。
