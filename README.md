# Portfolio

Animated portfolio of **Bojan Kocijan**, UX Manager. Dark, cinematic and scroll-driven.

Built with Vite, React, TypeScript, styled-components and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # typecheck + production build into dist/
```

## Edit the content

All copy lives in [`app/content.ts`](app/content.ts): profile, about, case studies (CoachCub, FrankBeam), career timeline, awards and contact. Colours and fonts are in [`app/theme.ts`](app/theme.ts).

## Structure

Each section is a folder in `app/components/` with four files: component, `.styles.ts`, `.types.ts` and `index.ts`.

Motion respects `prefers-reduced-motion`.

## License

MIT
