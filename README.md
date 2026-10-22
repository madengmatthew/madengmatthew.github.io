# Jiale Li — personal website

A responsive academic-style personal website for **Jiale Li (李家乐)**, an undergraduate student at The Chinese University of Hong Kong, Shenzhen.

**Website:** <https://madengmatthew.github.io/>

## About this website

The page introduces my interests in data analysis, algorithms, and LLM agents, along with selected coursework, practical experience, and education. Interests are presented as developing areas of learning. The Console Text Editor is identified as CSC1002 coursework.

Built with semantic HTML, CSS, and a small progressive-enhancement script. All typography uses system fonts; no package installation, build process, external images, analytics, or third-party JavaScript is required.

## Files

- `index.html`: biography, interests, coursework, experience, education, and GitHub contact link.
- `styles.css`: responsive layouts, keyboard focus styles, reduced-motion support, and print layout.
- `script.js`: updates the navigation indicator as readers scroll; the website also works without JavaScript.
- `favicon.svg`: the JL monogram.
- `404.html`, `robots.txt`, and `sitemap.xml`: basic hosting and discovery support.
- `.nojekyll`: serves these static files directly on GitHub Pages.

## Edit the page

Update the relevant text in `index.html`. If the website address changes, update its canonical and Open Graph URLs, JSON-LD URL, `robots.txt`, and `sitemap.xml`. Keep the footer and sitemap date consistent with future edits.

For a local preview, run `python3 -m http.server 8000` in this directory and open <http://localhost:8000>.

## GitHub Pages

This site is designed for the repository `madengmatthew/madengmatthew.github.io`. Publish the root of the `main` branch using GitHub Pages. No custom domain or additional build step is needed.

The code walkthrough is an illustrative example, not a running editor. See the project repository for the runnable Python source and its limitations: <https://github.com/madengmatthew/console-text-editor>.
