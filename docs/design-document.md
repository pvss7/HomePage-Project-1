# Design Document — Varshith Sai Pothula / Personal Homepage

## 1. Project Description

This project is a personal homepage for **Varshith Sai Pothula**, an MS Computer Science
student at Northeastern University, built as a static, front-end-only site using vanilla HTML5, CSS3,
and ES6+ JavaScript modules, no frameworks, no component libraries, no
jQuery. The goal is to give visitors (recruiters, classmates, instructors,
collaborators) a fast, accessible, single-source page that explains who
Varshith is, what Varshith has built, and how to get in touch.

The visual concept is an **engineering blueprint**: a dark navy "drafting
table" background, pale cyan linework, hairline rules, and a warm copper
accent, evoking schematic diagrams rather than a generic SaaS landing page a fitting nod to Varshith's database-and-schema-heavy project work.
The site's signature original component is a **honeycomb project grid** 
a cluster of hexagonal cells (built with CSS `clip-path` and populated by a
small ES6 module) that link out to individual projects, echoing the
"circuit board node" motif of the blueprint theme.

### Goals

- Present a clear, scannable overview of Varshith's background and skills.
- Showcase projects in a visually distinct, interactive way.
- Be fully static, fast-loading, accessible, and responsive.
- Demonstrate clean ES6 module structure and organized assets.

### Non-goals

- No backend, no database, no build step required to view the site.
- No third-party UI kits (Bootstrap, Materialize, etc.) or jQuery.

## 2. User Personas

### Persona 1 — "Recruiting Rachel"

- **Role:** Technical recruiter at a mid-size software company.
- **Age:** 29
- **Goals:** Quickly assess whether a candidate's skills match an open
  role; find a resume and contact info within seconds.
- **Frustrations:** Personal sites that bury contact info, or that take
  too long to load on a work laptop with a locked-down browser.
- **Behavior:** Skims the hero section and project titles; rarely reads
  long paragraphs; wants a resume link and email address above the fold.

### Persona 2 — "Classmate Chris"

- **Role:** Fellow CS student evaluating Varshith's work for a group project
  or hackathon team.
- **Age:** 21
- **Goals:** See real, working project links and understand the tech
  stack used for each one; judge whether Varshith's coding style/interests
  align with their own.
- **Frustrations:** Portfolios with screenshots but no live links or
  source code; unclear descriptions of what a project actually does.
- **Behavior:** Clicks through to GitHub repos and live demos; checks the
  "About" page for interests and current focus.

## 3. User Stories

1. **As a recruiter**, I want to see Varshith's name, role, and a way to
   contact them within the first screen, so that I don't have to scroll
   to decide if this candidate is relevant.

   > Rachel opens the link from a resume PDF. In under five seconds she
   > sees "Varshith Sai Pothula — Computer Science Student" and an email button in
   > the header, and forwards the page to a hiring manager.

2. **As a fellow student**, I want to browse Varshith's projects visually and
   click through to the ones that interest me, so that I can evaluate
   real work instead of a bullet list.

   > Chris hovers over the honeycomb grid on the homepage, sees each cell
   > light up with a project title, and clicks the one about a compiler
   > project to open its dedicated page with a description and repo link.

3. **As any visitor**, I want a page that works and looks intentional on
   my phone, so that I can browse Varshith's work without needing a desktop.

   > A visitor opens the site on a train on their phone; the honeycomb
   > grid reflows into a single column of tappable hex cells and the nav
   > collapses into a menu button, with no horizontal scrolling.

4. **As a visitor using a screen reader or keyboard only**, I want every
   image to have descriptive alt text and every interactive element to be
   reachable and clearly focusable, so that I can navigate the site
   without a mouse.

   > A visitor tabs through the navigation, the honeycomb links, and the
   > contact form; each focused element shows a visible outline and each
   > project image announces a meaningful description.

5. **As Varshith**, I want the "current status" area of the page to update
   automatically (a live local time / days-since-launch readout) without
   reloading, so that the homepage feels alive rather than static.
   > A recruiter revisits the page a week later; the "days since launch"
   > counter and clock have both moved forward, signaling the page is
   > maintained.

## 4. Design Mockups

### 4.1 Design tokens

- **Color**
  - `--bp-bg`: `#0B2340` — page background (blueprint navy)
  - `--bp-panel`: `#123458` — card / section panels
  - `--bp-line`: `#CFE8FF` — hairline rules & headings (blueprint ink)
  - `--bp-text`: `#D8E6F2` — body text
  - `--bp-muted`: `#7FA0C0` — secondary text
  - `--bp-accent`: `#F2A65A` — copper accent (links, CTAs, hex borders)
  - `--bp-accent-2`: `#5FD4C4` — teal accent (hover states, focus ring)
- **Type**
  - Headings & body: `"Source Sans 3", "Segoe UI", sans-serif` (humanist,
    legible, technical-drawing-adjacent).
  - Data labels / stack tags / timestamps:
    `"JetBrains Mono", "Consolas", monospace` — used sparingly for short
    labels only (e.g. `TS`, `Python`, `04:12:09`), never for paragraphs.
- **Layout**
  - Left-aligned content, max content width ~72ch for readability.
  - CSS Grid for page-level sections; Flexbox for the nav bar and the
    honeycomb grid.
  - Hairline rules (`1px` `--bp-line` at low opacity) separate sections
    like schematic borders, instead of drop shadows or rounded cards.

### 4.2 Homepage wireframe (desktop)

```
┌───────────────────────────────────────────────────────────┐
│ [AR]   Home  Projects  About            04:12:09  EMAIL ▸ │  <- header/nav
├───────────────────────────────────────────────────────────┤
│  VARSHITH SAI POTHULA                                               │
│  Computer Science Student — builds small, useful tools     │
│  [Resume]  [LinkedIn]  [Email]                                │  <- hero
├───────────────────────────────────────────────────────────┤
│  ABOUT            │  quick facts panel (school, focus,     │
│  2-3 sentence bio │  days-since-launch live counter)       │
├───────────────────────────────────────────────────────────┤
│               PROJECTS — honeycomb grid                    │
│         ⬡        ⬡        ⬡                                │
│      ⬡        ⬡        ⬡                                   │
│         ⬡        ⬡                                         │
│   (each hex = project thumbnail + title, links out)        │
├───────────────────────────────────────────────────────────┤
│  Footer: © year, social links, "view source" link          │
└───────────────────────────────────────────────────────────┘
```

### 4.3 Projects page & About page

`projects.html` reuses the header/footer chrome and lists each project as
a full-width schematic "panel" (image, title, stack tags, description,
links) in a single CSS Grid column on mobile and a two-column grid on
wider screens.

`about.html` is written entirely in my own words, code and interests, favorite games, and manga/anime preferences with the same blueprint
tokens for visual consistency. The homepage (`index.html`) is instead the
assignment's required **AI-assisted page** (see README "Use of GenAI"
section): its hero copy and layout was AI assisted.
