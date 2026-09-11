# Sligo Alpha — architecture

## Principe

Sligo est une couche de composition au-dessus de Hugo + Reveal.js.

Le Markdown/YAML décrit **ce que l'on veut raconter**. Le template et le CSS décident **comment cela occupe la slide**.

Règle : ne pas demander à l'auteur de décrire des `div`, des grilles, des `fragment` ou des tailles CSS sauf exception.

## Les 7 compositions

### 1. Normal

Pour l'explication courante : `title`, `texte`, `image`, `focus`, `code`, etc.

### 2. Part

Une rupture de chapitre :

```yaml
- part: "Comprendre le problème"
```

### 3. Compare

Deux zones égales, pleine hauteur, chacune avec sa couleur.

```yaml
- compare:
    - color: blue
      title: "WebPerf"
      texte: |-
        - Tests automatisés
        - Front & Back
    - color: violet
      title: "Accessibilité"
      texte: |-
        - Tests manuels
        - Normatif
```

`title` sur la slide est un rappel discret en haut ; il peut être omis.

### 4. Aside

Une grande zone pour le propos/illustration et une zone étroite pour le contexte.

```yaml
- aside:
    - image: application.png
    - color: violet
      texte: |-
        **Conforme :** le parcours reste accessible.
```

Le premier élément est la zone principale ; les suivants sont le contexte.

### 5. Steps

Pour un raisonnement ou un processus. Chaque étape est un fragment Reveal, mais sa forme visuelle est une progression.

```yaml
- steps:
    - "Observer"
    - "Mesurer"
    - title: "Comprendre"
      texte: "Identifier ce qui compte"
    - "Agir"
```

### 6. Stat / Stats

Pour une donnée forte, avec une animation très légère.

```yaml
- stat:
    value: "42%"
    label: "des utilisateurs"
```

ou :

```yaml
- stats:
    - value: "42%"
      label: "utilisateurs"
    - value: "1,8 s"
      label: "chargement"
```

### 7. Statement

Une seule idée forte, typographique. Ce n'est pas une liste et ce n'est pas une suite de cartes.

```yaml
- statement:
    eyebrow: "À retenir"
    texte: "La performance perçue est une expérience utilisateur."
```

## Contenus

- `texte` : Markdown normal.
- `image` : nom de ressource, avec légende optionnelle après `|`.
- `focus` : message secondaire mis en évidence.
- `code` : bloc de code.
- `svg` : SVG inline ; les groupes peuvent utiliser les fragments Reveal.
- `html` : échappatoire explicite.
- `keyboard` : indication de raccourci.
- `quiz` : interaction légère.
- `fragment` : contenu explicitement séquencé quand aucun composant sémantique ne convient.

## Fragments

Les listes Markdown restent du Markdown :

```yaml
texte: |-
  - Premier point
  - Deuxième point
```

Le runtime Sligo ajoute `fragment` aux items de liste après le rendu Markdown. Aucun `replace` HTML n'est utilisé dans les templates.

Les composants `cards`, `steps`, `stats` utilisent directement les fragments Reveal car leur intention est explicitement séquentielle.

## Titres / rappels

Une slide normale utilise `title` comme titre principal.

`compare`, `aside`, `steps`, `cards` et `stats` peuvent recevoir `title`. Dans ces compositions, le titre devient un petit rappel absolu en haut et ne consomme pas la hauteur de la composition.

Si la slide est une continuation, ne pas mettre de `title`.

## CSS moderne

Le CSS utilise :

- `minmax(0, 1fr)` pour éviter les débordements de grid/flex ;
- `min-width: 0` sur les colonnes ;
- `clamp()` pour des tailles fluides ;
- `:has()` pour reconnaître des compositions quand une ancienne syntaxe doit rester compatible ;
- `color-mix()` pour les variantes ;
- `@layer` pour organiser le CSS Sligo ;
- une zone d'overrides hors layer pour rester prévisible face au CSS Reveal.js non layerisé.

Les compositions pleine page utilisent `width: 100vw` / `height: 100vh` et ne doivent pas être traitées comme de simples cards dans une slide.

## Reveal.js

Reveal reste le moteur : navigation, fragments, transitions, clavier, notes, highlight et PDF.

Sligo ajoute seulement les traductions nécessaires : listes -> fragments, stats -> count-up léger, quiz -> interaction, SVG -> fragments déjà présents dans le SVG.

## Accessibilité

- préférence `prefers-reduced-motion` respectée ;
- boutons de quiz réels ;
- `aria-live` pour le feedback ;
- pas de texte injecté dans les SVG par défaut ;
- le Markdown reste sémantique autant que possible.
