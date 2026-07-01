# Marcus Grönnå – Portfolio

Personal portfolio website built with [Next.js](https://nextjs.org), React, Tailwind CSS, and Framer Motion. Supports English and Swedish (i18n).

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

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to the main branch triggers an automatic production deployment.
