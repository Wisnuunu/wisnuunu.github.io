---
title: Hello, world — this site is born
date: 2026-09-16
tags: [meta, vitepress]
summary: First devlog entry. Setting up this site with VitePress, a data-driven devlog and (soon) an automated GitHub Pages deploy.
---

# Hello, world — this site is born

Welcome to the first entry of my devlog. This site runs on VitePress and is
deployed to GitHub Pages. It hosts two kinds of content:

- **Devlog** — dated posts like this one, documenting things I build, break and fix.
- **Notes / knowledge base** — topic-organized write-ups I want to share.

## What's set up so far

- VitePress site config with local search (press `s` or use the search box).
- A data-driven devlog: posts live in `devlog/posts/`, the landing page picks
  them up automatically and sorts them newest-first.
- Placeholder sections for the knowledge base, projects and an about page.

## How to add a post

Create a file in `docs/devlog/posts/` with frontmatter like the one above:

```md
---
title: My post title
date: 2026-09-16
tags: [tag1, tag2]
summary: One or two sentences shown on the devlog landing page.
---

Content goes here.
```

That's it — it appears on the landing page automatically. Future posts will
document the GitHub Actions deploy pipeline and more.

Until next commit. 🚀