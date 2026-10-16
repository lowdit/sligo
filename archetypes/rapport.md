+++
# RAPPORT — 1 200 à 2 500 mots. Gabarit fixe : docs/GENERATION.md §4.
# Mentorat de structure : s'inspirer de frago/audits (forme, pas contenu).
title = "{{ replace .Name "-" " " | title }}"
kind = "rapport"
outputs = ['HTML', 'presentation']
roles = []                # conferencier | professeur | freelance | referent-accessibilite
date = {{ .Date }}
subtitle = ""
authors = []
description = ""
toc = true
resources = []            # [{title = "", url = "", note = ""}] — tout chiffre cité ici

# Deck lié optionnel : 1 statement par constat majeur (voir archetypes/decks.md).
+++

## Contexte et périmètre

Le qui, le quoi, le pourquoi maintenant. Chiffres d'échelle sourcés et datés.

## Méthode

Comment on a observé. Outils, échantillon, limites assumées.

## Constats

Analyse, pas énumération. Pattern maison : constat, puis « **Résultat :** conséquence concrète ».

## Plan d'action

Priorisé : bloquant d'abord, progressif ensuite. Qui fait quoi, sur quel horizon.

## Suivi

Re-bouclage daté : ce qui se re-mesure, quand, avec quoi.
