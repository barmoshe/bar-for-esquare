# bar-for-esquare

An ad-hoc, personalized job-application page Bar Moshe built for the **Junior Full
Stack Developer** role at **e-square.io** (Tel Aviv, Hybrid), built in e-square's own
visual language (read live off e-square.io): the near-black navy canvas, glassmorphism
cards, vibrant purple → cyan gradients, a system-font display type, and gradient text
on emphasised words. The signature element is e-square's own "Open Positions" grid of
gradient-badge glass cards, reframed here as Bar's Selected Work. The hero centerpiece
reframes their pipeline as Bar's build loop: idea → AI coding agent (Claude Code / Codex
/ Cursor) → full-stack build → shipped.

English, LTR. Independent application, not affiliated with e-square.io. `robots: noindex`
— a private, shareable link sent with the application.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plain CSS (scoped under `.es-root`), no Tailwind, no GSAP — motion is CSS/SVG,
  gated on `prefers-reduced-motion`
- `next/og` share card (`app/opengraph-image.tsx`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3092
npm run build
```

## Layout

- `app/` — route shell (`layout.tsx` sets `lang="en" dir="ltr"`, `page.tsx` with metadata, `opengraph-image.tsx`)
- `src/marketing/esquare/` — `EsquareApp` (the page), `CapabilityFlow` (the hero graphic), `HeroBackdrop`, `esquare.css`
- `public/cv/Bar_Moshe_CV.pdf` — CV linked from the page

Built by Bar Moshe, in e-square.io's brand, for this application.
