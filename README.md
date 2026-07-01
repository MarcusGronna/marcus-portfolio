# Marcus Grönnå – Portfolio

Personal portfolio website built with [Next.js](https://nextjs.org), React, Tailwind CSS, and Framer Motion. Supports English and Swedish (i18n).

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Scripts

| Command | Description |
| --------------- | ------------------------------------ |
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/[lang]/      # Pages (routed by language: en/sv)
├── components/      # Shared UI components
├── content/         # Localised content (i18n, projects, skills, etc.)
├── lib/             # Utility modules
└── middleware.ts    # Language detection / redirect
public/              # Static assets (images, CV PDFs, favicons)
```

## Updating the CV

Place the latest CV files in `public/` with the following names:

- `Marcus Grönnå - CV - EN.pdf` — English version
- `Marcus Grönnå - CV - SV.pdf` — Swedish version

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to the main branch triggers an automatic production deployment.
