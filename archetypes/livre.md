+++
# LIVRE — chapitré. Chapitres `##` titrés en affirmations ; à l'impression, chaque chapitre ouvre une page.
title = "{{ replace .Name "-" " " | title }}"
kind = "livre"
outputs = ['HTML', 'presentation']
roles = []                # conferencier | professeur | freelance | referent-accessibilite
date = {{ .Date }}
subtitle = ""
authors = []
description = ""
toc = true
resources = []

# Gabarit : ancrage (« Pourquoi … ») → 4 à 6 chapitres thématiques → glossaire/bibliographie.
# Chapitre = 400 à 800 mots ; une idée directrice par chapitre, annoncée en première phrase.
+++

## Pourquoi ce livre

L'ancrage : le droit, la norme ou le constat qui rend le sujet incontournable. Courte, forte.

## Premier chapitre

Une idée directrice, développée en trois ou quatre sections courtes.

## Glossaire

Les notions techniques, expliquées en clair (style §3 de docs/GENERATION.md).
