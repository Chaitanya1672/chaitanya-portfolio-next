# Chaitanya Portfolio

A portfolio built with Next.js App Router. The shared navigation links to a
dedicated route for each portfolio section:

- `/` — Home
- `/skills` — Skills
- `/experience` — Experience
- `/open-source` — Open Source contributions
- `/projects` — Projects
- `/contact` — Contact form

Shared section components and portfolio data live in `components/Portfolio/` and
`constants/portfolio.ts`. Public images are served from `public/Images/`.

## Development

Use Node.js 20.10.0 or newer and npm 10.8.2 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```
