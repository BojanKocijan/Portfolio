# Project knowledge: Portfolio

## 1. Purpose
Animated personal portfolio for Bojan Kocijan, UX Manager at Digital.ai. Showcases an anonymised Digital.ai case study (AI adoption and governance in the design system), two founder projects (CoachCub, FrankBeam), two concepts, the career timeline from LinkedIn, and the BK Charterline open-source repo (formerly Design Forge).

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
- Digital.ai work is under NDA: name the company, but never product names, customers, screens or internal data. Its visual stays abstract and it has no external link (issue #59).
- Digital.ai case study: security and before/after blocks carry no product names and no numbers. Accessibility claim covers the UX prototypes only, and the guardrail hook is not claimed for every designer's machine (issue #61).
- Owner's photo asset in `src/images/aboutMe.*` is a family photo: never use it on the public page.
- The old Gatsby 2 starter was removed with owner approval. The site no longer uses Gatsby.
- Deployed to GitHub Pages via .github/workflows/pages.yml: https://bojankocijan.github.io/Portfolio/
- Gate tier lowered via `skip gates` at owner's request (issue #38).
- Ko-fi support is one plain link, "Support BK Charterline on Ko-fi", next to View on GitHub. The coffee strip below it is the explanation. No Ko-fi widget script: the owner chose against the floating button (issue #67).
- Design Forge was renamed BK Charterline (2026-10-07). The panel component is still `DesignForge`; renaming the folder is a separate refactor. Its stats are copied by hand from the site's "In numbers" section (https://bojankocijan.github.io/bk-charterline/#numbers), so update them with each release (issue #69).

## 8. Open questions
- None.

## 9. GitHub Issues repo
BojanKocijan/Portfolio
