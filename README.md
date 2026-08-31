# Portfolio Site

A static HTML/CSS/JS portfolio — no build step, no dependencies.

## Structure
```
index.html      → all content lives here
style.css       → visual design (dark "process readout" theme)
script.js       → scroll fade-in animations
assets/         → drop your resume.pdf and any images here
```

## Before you publish
1. Add your résumé PDF at `assets/resume.pdf` (the nav bar and hero button already link to it).
2. Update the placeholder contact links in `index.html` (search for `#contact`):
   - `you@example.com` → your real email
   - `linkedin.com/in/yourprofile` → your LinkedIn
   - `github.com/yourusername` → your GitHub
3. Optional: add a headshot/photo to `assets/` and reference it in the hero or about section.

## Deploying to GitHub Pages (free)
1. Create a new GitHub repo, e.g. `yourusername.github.io` (this exact name gives you a root-level URL) — or any repo name if you're fine with a `/reponame/` path.
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site will be live at `https://yourusername.github.io` (or `https://yourusername.github.io/reponame/`) within a minute or two.

## Optional: custom domain
Buy a domain (e.g. via Namecheap, ~$10–15/yr), then in the same **Settings → Pages** panel add it under "Custom domain." GitHub will show you the DNS records to add at your registrar.

## Editing content later
Everything text-based is in `index.html` — project entries are under `<section id="projects">`, each wrapped in an `<article class="log-entry">`. Copy/paste that block to add a new project.
