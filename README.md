# Personal Portfolio — Vikas Palakurthi

A dark, cinematic personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Self-hosted fonts (no external calls), fully static, deploys anywhere.

**Interactions:** an animated canvas market-data backdrop with mouse parallax, a cursor spotlight, a scroll-progress rail, 3D-tilt project cards with a follow spotlight, magnetic buttons, count-up stats, and staggered scroll reveals. All motion respects `prefers-reduced-motion` and pauses when off-screen for performance.

**This repo is engineered in the open.** The site's `/engineering` page explains how it's built; the full write-ups live in [`docs/`](docs/): [architecture](docs/architecture.md), [system design](docs/system-design.md), [release branching strategy](docs/branching-strategy.md), and [decision records (ADRs)](docs/decisions/). The git history follows the branching strategy it documents — `main` is production, releases are tagged, run `git log --graph --decorate --oneline` to verify.

---

## ✏️ Where to edit content

**Everything lives in one file:** [`src/data/content.ts`](src/data/content.ts)

Open it and edit the objects. The components read only from this file, so you never have to touch the layout to change text. Look for the `// TODO: confirm from resume` comments — those are the fields I filled with best guesses that you should verify:

| What | Field in `content.ts` |
|------|------------------------|
| Name / role / tagline | `site` |
| GitHub + LinkedIn URLs | `site.socials` |
| Work history | `experience[]` (add your prior roles here) |
| Projects | `projects[]` (add live URLs via each project's `links`) |
| Skills | `skills[]` |
| About paragraphs & stats | `about` |

### Add your résumé PDF
Drop your resume file at `public/resume.pdf`. The "Résumé" button already points to `/resume.pdf`.

---

## 🚀 Run locally

```bash
npm install
npm run dev      # http://localhost:3001
```

## 🏗️ Build

```bash
npm run build
npm run start
```

---

## ☁️ Deploy

### Vercel (easiest — matches your stack)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset auto-detects **Next.js**. Click Deploy. Done.
4. Add your custom domain (e.g. a `rulesoverresults.com` subdomain) in Project → Settings → Domains.

### Cloudflare Pages
1. Push to GitHub.
2. Cloudflare Pages → Create → connect repo.
3. Build command: `npm run build`; output uses the Next.js preset. Deploy.

---

## 🎨 Customizing the look

- **Accent color / theme:** the `@theme` block in [`src/app/globals.css`](src/app/globals.css) — the `accent`, `base`, and `ink` color scales (Tailwind 4 CSS-first tokens).
- **Global styles / background grid / scrollbar:** [`src/app/globals.css`](src/app/globals.css).
- **Sections / layout:** [`src/components/`](src/components/) — one file per section (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`).

---

## 📁 Structure

```
src/
  app/
    layout.tsx      # fonts + metadata
    page.tsx        # assembles all sections
    engineering/    # /engineering — how this site is built & shipped
    globals.css     # theme, grid, scrollbar
  components/        # one file per UI section
  data/
    content.ts      # ← EDIT EVERYTHING HERE
docs/                # architecture, system design, branching strategy, ADRs
public/
  resume.pdf         # ← add your résumé here
```
