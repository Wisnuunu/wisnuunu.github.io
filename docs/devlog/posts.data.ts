import { createContentLoader } from 'vitepress'

export interface Post {
  url: string
  title: string
  date: string
  dateText: string
  tags: string[]
  summary: string
}

export default createContentLoader('devlog/posts/**/*.md', {
  transform(raw): Post[] {
    return raw
      .filter((p) => p.frontmatter?.date)
      .sort((a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string))
      .map((p) => ({
        url: p.url,
        title: p.frontmatter.title ?? '',
        date: p.frontmatter.date as string,
        dateText: new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(p.frontmatter.date as string)),
        tags: (p.frontmatter.tags as string[]) ?? [],
        summary: p.frontmatter.summary ?? ''
      }))
  }
})