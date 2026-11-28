// 博客正文的排版（字体、字号、行高、深色模式前景色等），文章页和偶得共用。
// 不含宽度与居中，由使用方自己决定。
export const articleProseClass = [
  "prose prose-neutral dark:prose-invert text-[calc(1rem*var(--article-body-scale,1))]",
  "prose-headings:font-serif prose-headings:font-bold",
  "prose-h2:text-[calc(1.875rem*var(--article-body-scale,1))] prose-h2:mt-12 prose-h2:mb-4 prose-h2:flex prose-h2:items-center prose-h2:gap-3",
  "prose-h3:text-[calc(1.5rem*var(--article-body-scale,1))] prose-h3:mt-8 prose-h3:mb-3",
  "prose-h4:text-[calc(1.25rem*var(--article-body-scale,1))]",
  "prose-p:text-[calc(1.03125rem*var(--article-body-scale,1))] prose-p:leading-[1.85] prose-p:my-5 prose-p:text-foreground/90 dark:prose-p:text-foreground",
  "prose-a:text-primary prose-a:no-underline prose-a:hover:underline",
  "prose-blockquote:border-l-primary prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[calc(1.03125rem*var(--article-body-scale,1))] prose-blockquote:leading-[1.85] prose-blockquote:text-content-secondary prose-blockquote:font-normal",
  "prose-strong:text-foreground prose-strong:font-semibold",
  "prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[calc(0.875rem*var(--article-body-scale,1))] prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:bg-secondary prose-pre:border prose-pre:border-border",
  "prose-ol:text-[calc(1.03125rem*var(--article-body-scale,1))] prose-ul:text-[calc(1.03125rem*var(--article-body-scale,1))] prose-ol:text-foreground/90 prose-ul:text-foreground/90 dark:prose-ol:text-foreground dark:prose-ul:text-foreground prose-ol:my-5 prose-ul:my-5",
  "prose-li:marker:text-primary prose-li:my-1.5 prose-li:leading-[1.85]",
  "prose-table:text-[calc(0.875rem*var(--article-body-scale,1))]",
  "prose-th:bg-secondary prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-medium",
  "prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border",
  "prose-hr:border-border prose-hr:my-8",
].join(" ")
