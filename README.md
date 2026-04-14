# tnovau.github.io

Personal CV / portfolio site built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

## Sections

- About
- Skills
- Job experiences
- GitHub repositories
- Portfolio

## Features

- Responsive sidebar navigation (collapsible on mobile)
- Dark / light mode toggle
- Scroll-triggered animations (IntersectionObserver)
- Static export for GitHub Pages
- Tailwind CSS v4 (CSS-first configuration)
- TypeScript throughout

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS 4 |
| Animations | Motion (Framer Motion) |
| Icons | react-icons |
| Hosting | GitHub Pages (static export) |

## Quick start

```sh
# Install dependencies
npm install

# Run the dev server (Turbopack)
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build

```sh
# Production build (static export)
npm run build
```

The output is generated in the `out/` directory.

## Configuration

All site data lives in `data/siteConfig.ts` — update it with your own information:

```ts
const siteConfig: SiteConfig = {
  siteTitle: 'Hi! I\'m Tomás!',
  siteDescription: 'This is my personal page',
  keyWords: ['next.js', 'react', 'curriculum'],
  authorName: 'Tomás Novau',
  githubUsername: 'tnovau',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: '...',
  skills: [
    { name: 'Front-end', level: 90 },
    // ...
  ],
  jobs: [/* ... */],
  portifolio: [/* ... */],
  social: {
    twitter: '...',
    linkedin: '...',
    github: '...',
    email: '...',
  },
  enableDarkmode: true,
  headerLinks: [
    { label: 'Home', url: '/' },
    { label: 'Portifolio', url: '/portifolio' },
  ],
  // ...
}
```

## Project structure

```
app/                  # Next.js App Router pages & layouts
  layout.tsx          # Root layout (metadata, FOUC script)
  page.tsx            # Home page
  portifolio/         # Portfolio page
data/
  siteConfig.ts       # All site content & configuration
src/
  components/         # React components
    theme/            # Theme context provider
  utils/              # Utility functions
public/               # Static assets (images, favicon)
```

## License

MIT
