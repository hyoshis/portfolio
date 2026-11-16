# Hiyo Shin — Portfolio

An arcade-inspired portfolio with a simple pixel-type hero, two CLI design stories, and one coming-soon project.

## Preview

Open `index.html` directly in a modern browser. No install or build step is required.

To preview over HTTP, run `python -m http.server 8000 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8000`.

## Publish

Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, and the `assets` directory together to any static website host. The arcade font is bundled locally; the page makes no third-party requests.

For GitHub Pages, push these files, then select **Settings → Pages → Deploy from a branch → main → / (root)** in the repository. The site will be served at `https://hyoshis.github.io/portfolio/`.

## Update the content

- `index.html`: landing page copy and project previews.
- `script.js`: case study summaries in the `projects` object.
- `styles.css`: colors, typography, layouts, and motion.

Project cards include screenshots of the CLI guidelines and azd style-guidelines repository. Add verified outcomes and additional artifacts to the case studies as they become available.

## Font license

Press Start 2P by CodeMan38 is bundled under the SIL Open Font License. See `assets/fonts/OFL.txt`.