# Varshith Sai Pothula — Personal Homepage

A static, front-end-only personal homepage built with **vanilla HTML5,
CSS3, and ES6+ JavaScript modules**, no frameworks, no component
libraries, no jQuery. The visual theme is an engineering "blueprint," and
the signature original component is a **honeycomb project grid** built
with CSS `clip-path` and populated dynamically by a small ES6 module.

- **Author:** Varshith Sai Pothula
- **Live site:** _replace with your deployed GitHub Pages URL, e.g._
  `https://pvss7.github.io/HomePage-Project-1/`

## Project Objective

Build a personal homepage using only vanilla HTML5, CSS3, and ES6+
JavaScript (loaded as ES modules), with:

- A distinct visual identity and one original, differentiating component
  (the honeycomb project grid).
- At least two conventional HTML pages plus a third, AI-assisted page.
- Clean, organized assets (`css/`, `js/`, `images/`, `docs/`).
- Accessible markup (semantic elements, alt text, visible focus states,
  keyboard support).
- Code that passes ESLint and is formatted with Prettier.

## Screenshot

![Homepage screenshot showing the blueprint-themed hero section and honeycomb project grid](./docs/screenshot.png)

## Pages

| Page               | URL             | Notes                                            |
| ------------------ | --------------- | ------------------------------------------------ |
| Home (AI-assisted) | `index.html`    | Hero, quick facts, honeycomb project grid        |
| Projects           | `projects.html` | Full project list + contact form                 |
| About              | `about.html`    | Written in my own words, interests, not AI copy |

## Project Structure

```
homepage/
├── index.html
├── projects.html
├── about.html
├── css/
│   └── style.css
├── js/
│   ├── main.js            # entry point, imported via <script type="module">
│   ├── honeycomb.js        # builds the honeycomb project grid
│   ├── projects-data.js     # shared project data
│   ├── uptime.js            # live clock / uptime readout
│   └── nav.js                # mobile nav toggle
├── images/                    # favicon, avatar, project thumbnails (SVG)
├── docs/
│   └── design-document.md      # personas, user stories, mockups
├── resume.pdf                   # real resume, uploaded by the student
├── .eslintrc.json / eslint.config.js
├── .prettierrc / .prettierignore
├── package.json
└── LICENSE
```

## Instructions to Build / Run Locally

This is a static site — no build step is required to view it.

1. Clone the repository and enter the project folder:
   ```bash
   git clone https://github.com/pvss7/HomePage-Project-1
   cd homepage
   ```
2. (Optional) Install dev dependencies for linting/formatting:
   ```bash
   npm install
   ```
3. Serve the site locally (any static server works):
   ```bash
   npm start
   # or simply open index.html directly in a browser
   ```
4. Lint and format:
   ```bash
   npm run lint
   npm run format
   ```

## Deployment (GitHub Pages)

1. Push the repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," choose the `main` branch and the `/ (root)` folder.
4. Save — GitHub will publish the site at
   `https://pvss7.github.io/HomePage-Project-1/`.

## Original / Creative Component

The **honeycomb project grid** on the homepage renders hexagonal project
cells using CSS `clip-path`, built dynamically from `js/projects-data.js`
by `js/honeycomb.js` — no hard-coded, repeated markup. A second original
piece of functionality, `js/uptime.js`, drives a live "system status"
readout (local clock + days-since-launch counter) that updates every
second without a page reload.

## Use of GenAI

This project was built with assistance from **Claude** (Anthropic),
model **Claude Sonnet 4.5**, used through the Claude.ai chat interface
with its coding/file-creation tools.

- **`index.html` (Home) is the assignment's required AI-assisted page.**
  Its copy the hero blurb, layout, and quick facts panel design — was drafted by Claude
  .
- **`about.html` was written by me, not AI-generated.** The bio and
  interests on that page (anime/manga preferences, favorite games) came
  from my own description of myself; Claude only cleaned formatting, it did not invent any facts, opinions, or preferences.
- **What else AI was used for:** scaffolding the overall project
  structure (HTML pages, CSS design system, ES6 modules), the project
  panel descriptions on `projects.html`, generating placeholder SVG icons/favicon,
  writing this README from my intial drafted README, and configuring ESLint/Prettier.
- **Representative prompts used:**
  > "Draft a README using the given intial draft and making sure it has all the requirements, find out if any of the requirements need editing and keep placeholders where images or designs are needed"
- All AI-generated code and text was reviewed by me before this
  submission, and I take responsibility for its accuracy.

## License

Released under the [MIT License](./LICENSE).
