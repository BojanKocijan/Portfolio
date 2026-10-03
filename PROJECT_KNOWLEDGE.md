# Project knowledge: Portfolio

## 1. Purpose
Animated personal portfolio for Bojan Kocijan, UX Manager at Digital.ai. Showcases two founder projects (CoachCub, FrankBeam), the career timeline from LinkedIn, and the Design Forge open-source repo.

## 2. Users
Hiring managers, design leaders and peers reviewing Bojan's work.

## 3. Stack
Vite + React 19 + TypeScript, styled-components, Framer Motion. Dev port 5174 (strict).

## 4. Components
Hero, CaseStudy, Timeline, About, DesignForge, Recognition, Contact, Reveal, ScrollProgress. All in `app/components/`, four files each.

## 5. UI library
None. Custom styled-components with tokens in `app/theme.ts`.

## 6. Data layer
Mocks only: static typed content in `app/content.ts`. No backend, no database.

## 7. Decisions
- No metrics on case studies (owner decision). Do not invent numbers.
- Owner's photo asset in `src/images/aboutMe.*` is a family photo: never use it on the public page.
- The old Gatsby 2 starter was removed with owner approval. The site no longer uses Gatsby.
- Deployed to GitHub Pages via .github/workflows/pages.yml: https://bojankocijan.github.io/Portfolio/
- Gate tier lowered via `skip gates` at owner's request (issue #38).

## 8. Open questions
- None.

## 9. GitHub Issues repo
BojanKocijan/Portfolio
