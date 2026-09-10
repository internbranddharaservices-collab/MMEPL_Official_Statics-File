# MME Private Limited — Corporate Website

## Original Problem Statement
Existing React website (GitHub: internbranddharaservices-collab/MME-Private-Limited-2). Rename the "About" nav item to "We Are" as a dropdown with 5 subpages, each beautifully designed and mobile-friendly:
1. About Company (with an "Our Mission & Vision" section)
2. Board of Director
3. Our Team
4. Our Client
5. Annual Report

Content sourced from mmepl.co.in (about-company, mission-vision, director-desk, team, clients, annual-report). Premium "big company" design chosen by builder.

## Architecture
- Frontend: React 19 + CRACO + Tailwind CSS (build-time via tailwind.config.js) + framer-motion + lucide-react
- Backend: FastAPI + MongoDB (motor) — currently only boilerplate status endpoints
- Theme: Navy (#0a1a2f) + Gold (#c8a25c), Archivo display font

## Implemented (2026-06)
- Restored 3 missing pages the repo referenced but didn't ship: ServicesPage, ServiceDetailPage, ProjectsPage.
- Added `tailwind.config.js` (shadcn-compatible, content globs) — the repo shipped none, so build-time utilities now compile deterministically (previously flaky).
- Created 5 "We Are" subpages under /we-are/*:
  - AboutCompanyPage — intro, stats, Mission & Vision section, core values, caution notice
  - BoardOfDirectorsPage — Pradeep Sharma (Director & CEO) + Vandana Singh (GM-HR) with full messages
  - OurTeamPage — 8 members, monogram avatar cards
  - OurClientsPage — clients marquee + client directory grid (sector + location) + certifications
  - AnnualReportPage — performance highlights + year-wise report cards (FY2019-20 → FY2025-26) with download buttons (PDF links pending)
- Navbar/Footer: "About" → "We Are" dropdown (from content.js NAV_LINKS). Hero CTA repointed to /we-are/about-company. Old /about route retained.
- All content centralized in src/content.js (MISSION_VISION, BOARD, TEAM, OUR_CLIENTS, ANNUAL_REPORTS, REPORT_HIGHLIGHTS).
- Created missing .env files (frontend REACT_APP_BACKEND_URL, backend MONGO_URL/DB_NAME).

## Verified
- All 5 subpages + dropdown nav verified via screenshots at 1920px and 390px (mobile). No page overflow (only hero image clipped inside overflow-hidden, cosmetic/site-wide).

## Backlog / Next
- P1: Real Annual Report PDFs (upload + wire download links).
- P1: Real board/team photos (currently stock portraits + monogram avatars).
- P2: Additional pages the user mentioned will follow ("after this I will give you other page design").
- P2: Real client logos on directory cards.

## Iteration 2 (2026-06)
- FIXED BUG: blank page on first in-app navigation. Root cause: `useReveal` ran only once on Layout mount (Layout never re-rendered on SPA route changes), so new pages' `.reveal` elements stayed at opacity:0 until a hard refresh. Fix: `useReveal` now depends on `useLocation().pathname` and re-scans on every route change (rAF + 500ms fallback). Verified 100% by testing agent (iteration_2.json).
- Annual Report redesigned: added a "Revenue in ₹ Cr." bar chart (7 years, projected 2025-26 in gold) + a Sl.No/Year/Revenue table, matching the reference with a premium look.
- Board of Directors: real photos wired (public/images/pradeep.png, vandana.png) + verbatim director-desk.php content for Pradeep Sharma and Vandana Singh. Director/HR images site-wide now use these.

## Iteration 3 (2026-06) — "We Serve" section
- Added a data-driven "We Serve" section (navbar dropdown replaces old "Services") with 10 service categories under /we-serve/<category> and /we-serve/<category>/<sub>.
- Categories & sub-service counts: cement-plant(7), power-projects(7), chemical-fertilizer(7), steel-projects(7), industrial-construction(7), civil-construction(7), mechanical-works(8), electrical-works(8), balance-of-plant(7), additional-services(8) — 72 detail pages total.
- New files: src/weServe.js (all category+sub content), pages WeServePage.jsx (landing, 10 cards), WeServeCategoryPage.jsx (overview + sub grid), WeServeDetailPage.jsx (scope of work + more-in-category). Invalid slugs redirect gracefully.
- Verified 100% by testing agent (iteration_3.json): dropdown, counts, detail routes, redirects, mobile accordion, and no regression to the blank-page fix.
- Old /services routes remain but are unlinked from the navbar.

## Iteration 4 (2026-06) — "We Serve" restructured
- Replaced the 10-category We Serve with a cleaner 2-level structure: 4 disciplines × 4 plant sectors.
- Disciplines: Mechanical Work, Civil Work, Electrical Work, Additional Services. Each serves: Cement Plant, Power Plant, Steel Plant, Fertilizer Plant. = 16 detail pages.
- URLs: /we-serve, /we-serve/<discipline>, /we-serve/<discipline>/<plant>. Old slugs redirect to /we-serve.
- Redesigned: landing = 4 discipline image cards; discipline page = 4 plant image cards with scope highlights; detail page = plant-image hero + overview image + Scope of Work + "More in <discipline>".
- Data rewritten in src/weServe.js. Nav (WE_SERVE_LINKS) now 4 items.
- Verified 100% by testing agent (iteration_4.json): dropdown, landing, 4 disciplines, all 16 detail routes, redirects, SPA no-blank regression, mobile accordion.
