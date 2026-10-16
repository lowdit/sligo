+++
# SYNTHÈSE — ≤ 500 mots. Gabarit fixe : docs/GENERATION.md §4. Passe le plan humain avant la rédaction.
title = "{{ replace .Name "-" " " | title }}"
kind = "synthese"
outputs = ['HTML', 'presentation']
roles = []                # conferencier | professeur | freelance | referent-accessibilite
date = {{ .Date }}
subtitle = ""
authors = []
description = ""
points = []               # 5 décisions max, une phrase chacune — reproduites en slides statement
resources = []            # [{title = "", url = "", note = ""}]

# Deck lié : 1 statement par point (mode collection) — gabarit dans archetypes/decks.md.
+++

## Ce qui change

Trois phrases pour poser l'angle. Courtes, en affirmation.

## Ce qu'il faut décider

Le plan d'action — la même matière que `points`, développée en phrases complètes.
