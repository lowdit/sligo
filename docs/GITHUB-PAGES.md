# GitHub Pages — Sligo

- **Démo publiée (cible org)** : `https://lowdit.github.io/sligo/`
- **Source Hugo** : `exampleSite/` (`.github/hugo-site-dir`)
- **Build** : `./scripts/hugo-pages-build.sh "https://lowdit.github.io/sligo/"` (CI : workflow `.github/workflows/gh-pages.yml`, Hugo **0.167.0** extended)
- **Activation** : Settings → Pages → GitHub Actions ; push `main` ou *workflow_dispatch*

Config prod : `exampleSite/config/production/hugo.toml` (modules `github.com/lowdit/minigo`, `github.com/lowdit/sligo`).
