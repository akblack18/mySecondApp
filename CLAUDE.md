# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start                              # dev server at http://localhost:3000
npm test                               # interactive watch mode
npm test -- --watchAll=false           # run tests once
npm test -- App.test.js                # run a single test file
npm run build                          # production build into build/
```

## Architecture

Single-page React 19 app (Create React App) with no routing, no state, no external libraries beyond the CRA defaults. All UI is in `src/App.js`; all styles are in `src/App.css` (~394 lines).

**Page structure** (top to bottom in `App.js`):

1. **`<header>`** — blue (`#357ec1`) top bar with Gracie Barra logo (`mainLogoBig`), Portuguese tagline + school name (`headerTopItens`), and a horizontal nav (`topNavigationBar`) linking to `#home`, `#sobreNos`, `#horario`, `#contacto`
2. **`introducaoImagemLogo` section** — full-width hero image with an overlaid quote
3. **`apresentacaoAcademiaSobreNos` section** — two-column layout: text ("We are Gracie Barra") + image
4. **`apresentacaoAcademiaSobreNosTwo` section** — two-column layout reversed: image + text ("Why Gracie Barra?")
5. **`programOverview` section** — program title/text, background image, and a 6-tile image grid (`overViewImg1`)
6. **Events section** — full-width events image beside a 2-row × 3-column tile grid (`eventTile1` / `eventTile2`), each tile has icon, heading, paragraph, and a "Find out More" button

All images are external URLs from `graciebarraeurope.com` and `unsplash.com` — no local image assets.

The nav anchors (`#sobreNos`, `#horario`, `#contacto`) are not yet wired to actual `id` attributes on sections.
