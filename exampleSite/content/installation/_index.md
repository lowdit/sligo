---
title: Sligo
description: Présentations Reveal.js accessibles et studio deck-studio.
layout: product
weight: 1
---

**Sligo** projette vos decks ; Minigo fournit l’accueil catalogue en vue **deck-studio**.

## Directement depuis GitHub (fork)

1. **Forker** [`lowdit/sligo`](https://github.com/lowdit/sligo).
2. **Settings → Pages → Source : GitHub Actions**.
3. Le workflow construit `exampleSite/` et publie la démo. Éditez `exampleSite/content/decks/` pour votre contenu.

## En local (dépôt cloné)

```bash
git clone https://github.com/lowdit/sligo
cd sligo/exampleSite
hugo server
```

## Dans votre propre site (module Hugo)

```toml
theme = ["minigo", "sligo"]

[params.lowdit]
  siteProfile = "presentations"
  view = "deck-studio"
```

Puis `hugo server` : vos présentations se construisent depuis `content/decks/`.

## GitHub Pages (votre site)

Le workflow construit `exampleSite/` par défaut ; passez à `.` dans `.github/hugo-site-dir` si votre `content/` est à la racine.
