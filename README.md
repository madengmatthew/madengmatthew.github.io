# Personal Website

Source for **[madengmatthew.github.io](https://madengmatthew.github.io/)**, a compact academic homepage hosted on GitHub Pages.

## Technology

- **HTML5** for page content, navigation, and structured metadata.
- **CSS3** for layout, responsive behavior, typography, and print styles.
- System fonts and inline SVG contact icons; no external font service or icon library.
- No frontend framework, application JavaScript, package manager, or build dependencies. The JSON-LD block in `index.html` is structured metadata, not application code.

GitHub Pages serves the repository's static files directly from the **root of the `main` branch**. `.nojekyll` disables Jekyll processing.

## Repository structure

```text
.
├── index.html                 # Homepage content, links, metadata, and project example
├── styles.css                 # Desktop, responsive, and print styles
├── assets/
│   ├── portrait.jpg           # Homepage portrait
│   └── Jiale_Li_CV.pdf         # Public English CV
├── favicon.svg                # Browser tab icon
├── 404.html                   # Custom page for missing URLs
├── robots.txt                 # Crawler rules and sitemap location
├── sitemap.xml                # Canonical homepage URL and modification date
├── .nojekyll                  # Serve files without Jekyll processing
└── README.md
```

## Layout and accessibility

The homepage uses a single content column, a wrapping top navigation, a right-aligned portrait, and contact links in the footer. The main content is limited to 850px on wider screens.

Responsive CSS has three breakpoints:

| Maximum viewport width | Adjustment |
| --- | --- |
| **620px** | Smaller page margins and portrait; navigation wraps; entry dates move below titles. |
| **480px** | The editor example changes from three columns to a vertical arrangement. |
| **420px** | The portrait reduces to 104px wide. |

Print styles hide navigation, use the available page width, underline links, and avoid splitting individual entries when possible.

Accessibility features include semantic headings and page landmarks, a keyboard-accessible “Skip to content” link, visible link focus outlines, portrait alternative text, and accessible labels for icon links. These describe implemented features and do not imply an accessibility certification.

## Project example

The Console Text Editor section contains a **static before/after illustration** of its `sw` command:

```text
Before:   Hello world
Command:  sw
After:    world Hello
```

The highlighted `H` represents the cursor before and after the swap. The example does not execute Python or accept input in the browser; the project links lead to its source code and documentation.

## Local preview

Python 3 is sufficient to serve the files for preview. From the repository directory, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`. Python is only used for this local preview; the published website has no Python runtime requirement.

## Content maintenance

- Edit **`index.html`** to update the introduction, interests, experience, projects, education, navigation, or contact links.
- Edit **`styles.css`** to change spacing, colors, typography, breakpoints, or the project illustration's presentation.
- Replace **`assets/portrait.jpg`** to update the photo. Keep its existing path, or update the image reference in `index.html`.
- Replace **`assets/Jiale_Li_CV.pdf`** to update the downloadable CV. The navigation points directly to this filename.
- Edit **`favicon.svg`** for the browser icon and **`404.html`** for the missing-page message.

Search and discovery support includes the page title, description, viewport and Open Graph metadata, a canonical URL, `Person` JSON-LD, favicon, `robots.txt`, and `sitemap.xml`. If the site address changes, update the canonical and Open Graph URLs and JSON-LD in `index.html`, the sitemap location in `robots.txt`, and the URL in `sitemap.xml`. Keep contact links and JSON-LD profile links consistent. Update the sitemap's `lastmod` date when making a substantive page change.

Content changes are made in these source files and published through GitHub; there is no content editing interface.

## Deployment

1. Keep the website files at the root of **`madengmatthew/madengmatthew.github.io`**.
2. In the repository, open **Settings → Pages**.
3. Set the publishing source to **Deploy from a branch**, choose **`main`** and **`/ (root)`**, and save if these settings are not already selected.
4. Commit and push the updated files to `main`.
5. Wait for GitHub Pages to finish publishing, then open **[https://madengmatthew.github.io/](https://madengmatthew.github.io/)**.

No local build command is needed. Keep `.nojekyll` in the repository root.

If an update is not visible immediately, check the deployment status on the Pages settings page and allow publishing to finish. The browser or GitHub Pages cache can temporarily show an older version; try a hard refresh or a private window after deployment completes. For missing images or CV files, check that the committed filenames and link paths match exactly, including capitalization.
