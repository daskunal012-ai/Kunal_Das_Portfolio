# Kunal Kumar Das — Portfolio Website

A responsive, static portfolio inspired by the supplied bright purple, orange and white portfolio reference.

## Files

- `index.html` — page content and metadata
- `style.css` — responsive styling and decorative project mockups
- `script.js` — mobile navigation, project filters and active navigation state
- `assets/profile.svg` — local profile image so the portfolio is self-contained and GitHub Pages-ready
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing to the static site

## Run locally

Open `index.html` in a browser. No build tools or package installation are required.

## Personal details included

- Education, skills, projects, certificates and contact details
- Resume, GitHub, LinkedIn and certificate links supplied by the owner
- Local profile image included with the project so it works when uploaded to GitHub

## Before publishing

1. Open `index.html` and check all personal details and links.
2. Add repository/demo URLs for projects where available. The Phishing Website Detection card currently intentionally does not claim metrics or a repository link.
3. The Python and Responsive Web Design certificate cards are text-only because individual certificate URLs were not provided. Add links if you have them.
4. If you want to replace the local placeholder portrait, add your own image to `assets/profile.jpg` and update the `src` in `index.html`.

## Deploy free with GitHub Pages

1. Create a GitHub repository named `portfolio` (or `yourusername.github.io` for a user site).
2. Upload `index.html`, `style.css`, `script.js`, `README.md` and the `assets` folder to the repository root.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the URL shown on the Pages settings screen.

This is a static website; it does not include a backend or contact form service. The email CTA opens the visitor's email app through a `mailto:` link.
