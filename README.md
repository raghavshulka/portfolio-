# Himanshu Shukla - Portfolio

Personal portfolio of Himanshu Shukla, AI-focused full stack developer, Delhi, India.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion. The layout and
visual style are adapted from an MIT-licensed open-source portfolio template; its original
license is kept in `LICENSE` as MIT requires.

## Run locally

Requires Node 22 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

`npm run dev` also works once dependencies are installed.

## Where the content lives

| What | File |
|---|---|
| Name, bio, contact, resume link | `src/features/portfolio/data/user.ts` |
| Experience | `src/features/portfolio/data/experiences.tsx` |
| Projects | `src/features/portfolio/data/projects.ts` (images in `public/projects/`) |
| Skills | `src/features/portfolio/data/tech-stack.tsx` |
| Social links | `src/features/portfolio/data/social-links.tsx` |

Set `APP_URL` (see `.env.example`) once the site has a public domain.
