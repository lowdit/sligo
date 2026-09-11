# Sligo Alpha — intention pour les IA

Ce document est une consigne de conception pour toute IA qui modifie Sligo.

## 1. Philosophie

Sligo doit rester **simple à écrire** et **fort à l'écran**.

L'utilisateur écrit du Markdown/YAML. Il ne doit pas avoir besoin de connaître le CSS, le DOM ou Reveal.js pour obtenir une belle slide.

Ne pas transformer Sligo en framework de design configurable à l'infini.

## 2. Vocabulaire stable

Types de composition :

- normal
- `part`
- `compare`
- `aside`
- `steps`
- `stat`
- `stats`
- `statement`
- `cards`

Contenus :

- `texte`
- `image`
- `focus`
- `code`
- `svg`
- `html`
- `keyboard`
- `quiz`
- `fragment`

Ne pas inventer `split-1`, `split-2`, `hero-left`, `content-right`, etc. pour contourner un problème de CSS.

## 3. YAML avant CSS

Avant d'ajouter une option YAML, se demander :

1. Est-ce une nouvelle intention éditoriale ?
2. Est-ce réellement réutilisable ?
3. Est-ce impossible à déduire de la composition existante ?

Si la réponse est non, préférer CSS ou JS.

## 4. Markdown

Ne jamais modifier du HTML produit par `markdownify` avec une chaîne `replace` pour fabriquer des fragments.

Correct :

```gotemplate
{{ . | markdownify | safeHTML }}
```

Puis le JS peut ajouter les classes Reveal nécessaires.

Incorrect :

```gotemplate
{{ replace (. | markdownify) "<li>" "<li class='fragment'>" | safeHTML }}
```

## 5. Syntaxe Hugo

Attention : la syntaxe des templates Hugo n'est pas une syntaxe Go générique.

Privilégier les constructions Hugo simples :

```gotemplate
{{ with .texte }}
  {{ . | markdownify | safeHTML }}
{{ end }}
```

Pour les partials :

```gotemplate
{{ partial "presentation/slides" (dict "context" $ "value" $value "key" $key "slides" $slides "path" $path "collection" $collection) }}
```

Le renderer principal de l'alpha est un vrai partial : `layouts/partials/presentation/slides.html`.

## 6. Compare

`compare` signifie **deux surfaces égales**, pleine page.

Chaque colonne peut avoir sa couleur.

Ne pas remettre de VS.

Les titres de colonnes sont petits et occupent toute la largeur de leur zone.

## 7. Aside

`aside` signifie **propos principal + contexte/illustration**.

Ce n'est pas une grille de cards.

La zone principale respire ; la zone secondaire est étroite et accentuée.

## 8. Steps / Cards / Statement

Ils ne doivent pas être interchangeables :

- `steps` = progression / processus ;
- `cards` = plusieurs objets qui arrivent successivement ;
- `statement` = une affirmation forte, typographique ;
- `stat` / `stats` = données clés.

Ajouter simplement `.fragment` ne suffit pas à créer un nouveau composant : la composition doit avoir une identité visuelle.

## 9. Animation

Animation légère par défaut : opacity, petit déplacement, scale très faible, dessin SVG.

Éviter :

- gros zooms ;
- rotations décoratives ;
- compteurs rapides façon dashboard ;
- animations permanentes.

Respecter `prefers-reduced-motion`.

## 10. SVG

Un SVG peut être rendu progressivement avec des groupes :

```html
<g class="fragment">...</g>
<g class="fragment">...</g>
```

Pour les traits, `stroke-dasharray` / `stroke-dashoffset` peuvent dessiner progressivement un chemin.

Ne pas convertir systématiquement une illustration en dizaines de fragments : quelques étapes narratives suffisent.

## 11. Mise en page

Une slide normale doit avoir un contenu lisible et centré.

Les compositions `compare` et `aside` peuvent prendre toute la surface.

Toujours protéger les contenus contre les débordements :

```css
min-width: 0;
max-width: 100%;
overflow-x: auto;
```

Pour le code, préférer le scroll horizontal au cassage arbitraire des lignes.

## 12. Couleur

Couleur de marque principale : `#4631d4`.

Palette de base :

- violet `#4631d4`
- bleu `#164791`
- rouge `#c61818`
- crème douce
- encre `#151d34`

Les couleurs doivent servir la hiérarchie, pas décorer chaque élément.

## 13. Règle finale

Si une solution demande à l'auteur d'écrire plus de YAML pour obtenir le même résultat visuel, elle doit être considérée comme suspecte.
