# ZAC.GODFREY - Personal Blog & Portfolio

Personal website and blog for Zac Godfrey - Networks & Cyber Security student at Northumbria University.

Built with Astro, featuring CTF writeups, security projects, and technical blog posts.

## Features

- Modern, dark-themed design with custom animations
- Blog with MDX support for rich content
- Project showcase
- SEO-friendly with canonical URLs and Open Graph data
- Sitemap and RSS feed support
- Optimized images and performance

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: 'Your Post Title'
   description: 'Brief description'
   pubDate: 'Mar 19 2026'
   heroImage: '../../assets/your-image.jpg'  # optional
   tag: 'CTF / Linux'  # optional
   ---
   ```
3. Write your content using Markdown
4. Build and deploy

Posts automatically appear in the blog index, RSS feed, and sitemap.

## 🎨 Tech Stack

- **Framework**: Astro 6.0
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Bebas Neue, DM Mono, Playfair Display
- **Content**: Markdown/MDX with Zod validation
- **Deployment**: GitHub Pages (or your preferred host)

## 📂 Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable components
│   ├── content/
│   │   └── blog/       # Blog posts (.md, .mdx)
│   ├── data/           # Project data
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro configuration
```
