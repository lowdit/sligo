---
title: "Catalogue des compositions Sligo"
subtitle: "Une slide par type de bloc YAML — démo exampleSite"
type: presentation
date: 2026-10-21
authors:
  - Studio Lowdit
event: "Référence Sligo"
colorway: papier
font: optician
description: "Parcours guidé des blocs supportés par slides.content : part, texte, focus, cartes, étapes, chiffres, compare, aside, radial, code, quiz, image et statement."
slides:
  content:
    - title: "Comment lire ce deck"
      texte: |-
        Chaque slide montre **un seul type de composition** décrit dans le front matter YAML.

        Les decks thématiques mélangent ces blocs ; ici, c'est le **catalogue visuel** pour auteurs et intégrateurs.
    - part: "Structure | Séparer les chapitres"
    - title: "Titre + texte"
      texte: |-
        - Listes et **gras** Markdown
        - Paragraphes courts
        - Un rappel de titre peut venir d'une slide précédente (non montré ici)
    - focus: "Le bloc focus : une phrase qui tient toute la slide."
    - statement:
        eyebrow: "Statement"
        texte: "Citation ou règle centrale, avec une note en bas de bloc."
        note: "Clé YAML : statement.eyebrow · texte · note"
    - part: "Grilles"
    - title: "Cartes"
      cards:
        - title: "Carte A"
          texte: "Titre + texte court."
        - title: "Carte B"
          texte: "Jusqu'à quatre cartes par slide."
        - title: "Carte C"
          texte: "Fragments Reveal au clic."
        - title: "Carte D"
          texte: "Option image: demo-1.svg sur une carte."
    - title: "Étapes numérotées"
      steps:
        - title: "Cadrer"
          texte: "Objectif et hors-périmètre."
        - title: "Produire"
          texte: "Contenu ou livrable."
        - title: "Valider"
          texte: "Recette et décision."
    - title: "Chiffres animés"
      stats:
        - value: "42"
          label: "indicateur fictif"
        - value: "98 %"
          label: "taux de complétion"
        - value: "3 min"
          label: "temps de lecture cible"
    - title: "Un seul grand chiffre"
      stat:
        eyebrow: "Stat isolé"
        value: "1 / 6"
        label: "utilisateurs concernés (exemple)"
        note: "Clé YAML : stat (singulier)"
    - part: "Contrastes"
    - title: "Compare — deux colonnes"
      compare:
        - title: "Colonne neutre"
          texte: "Texte, focus ou image dans chaque colonne."
        - color: "red"
          title: "Colonne accent"
          texte: "color: red · blue · green selon la palette du deck."
    - title: "Aside — contenu + encart"
      aside:
        - title: "Bloc principal"
          texte: "Premier panneau : large, à gauche."
        - color: "blue"
          title: "Encart"
          texte: "Deuxième panneau : contexte, citation courte ou rappel."
    - part: "Radial | Pas une image"
    - title: "Radial — items autour d'un centre"
      radial:
        center:
          eyebrow: "Centre"
          title: "Rôle transversal"
          note: "HTML/CSS Sligo — clé YAML radial"
        radialReveal: true
        items:
          - title: "Pilotage"
            note: "plan · suivi"
          - title: "Qualité"
            note: "recette"
          - title: "Budget"
            note: "arbitrages"
          - title: "Équipe"
            note: "rituels"
          - title: "Clients"
            note: "feed-back"
          - title: "Veille"
            note: "outils"
    - part: "Image & SVG | Fichiers du thème"
    - title: "Clé image — figure centrée"
      texte: |-
        Le bloc **`image:`** affiche un SVG ou PNG (ici `demo-2.svg` du thème).

        Les fichiers **demo-*.svg** de l'exampleSite sont des **graphiques décoratifs sans texte** dans le fichier — d'où l'impression « vide ». En deck réel : SVG avec légende intégrée, ou texte Markdown comme ici.
      image: demo-2.svg
    - title: "Clé svg — zone d'affichage plus large"
      texte: "Même source (`demo-1.svg`), conteneur **sligo-svg** (plus grand que **sligo-media**)."
      svg: demo-1.svg
    - title: "Code source"
      code:
        language: yaml
        content: |
          slides:
            content:
              - part: "Chapitre"
              - focus: "Une idée par slide."
    - title: "Quiz interactif"
      quiz:
        question: "Quel bloc sépare visuellement les chapitres ?"
        choices:
          - text: "compare"
            correct: false
            explanation: "Compare oppose deux colonnes, pas un chapitre."
          - text: "part"
            correct: true
            explanation: "part affiche un intertitre plein écran."
          - text: "stat"
            correct: false
            explanation: "stat affiche un chiffre mis en avant."
    - part: "Fin"
    - statement:
        eyebrow: "Règle d'auteur"
        texte: "**Une composition par slide** quand vous apprenez ; mélangez-les quand le récit est rodé."
        note: "colorway · font · image de couverture : front matter du deck."
---
