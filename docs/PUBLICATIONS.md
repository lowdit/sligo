# Publications — une source, plusieurs vues

*Sligo Alpha · module « Publications »*

Pour **produire ces publications (rédaction assistée IA, à la volée mais cadrée)** — brief, sources du corpus lowdit accessibilité, style, passe de contrôle — le cadre complet est dans **[`docs/GENERATION.md`](./GENERATION.md)**. Création : `hugo new publication/<sujet>/index.md --kind <synthese|rapport|livre>`.

Une publication est **un seul fichier Markdown** qui se décline en plusieurs vues :

| Vue | Chemin | Rendu |
| --- | --- | --- |
| Article | `/publication/<slug>/` | synthèse, rapport ou livre (selon `kind`) |
| Slides | `/publication/<slug>/presentation.html` | le deck lié (Rendered via le format de sortie `presentation`) |

## 1. Créer une publication

```sh
hugo new publication/mon-sujet/index.md
```

Front matter utile (archétype `archetypes/publication.md`) :

- `kind` — `synthese` · `rapport` · `livre` (défaut `rapport`).
  - `synthese` : hero + bloc « À retenir » (`points`) + contenu court.
  - `rapport` : contenu long + sommaire (si `toc: true` **et** ≥ 400 mots — règle du partial `tableofcontent.html`) + `resources`.
  - `livre` : lecture longue 62ch ; à l'impression, chaque `##` ouvre une page (`break-before: page`).
- `roles` — étiquettes de rôle : `conferencier` · `professeur` · `freelance` · `referent-accessibilite`.
- `resources` — liste de `{title, url, note}` rendue en bas d'article.
- `outputs = ['HTML', 'presentation']` — l'archétype le pose par défaut ; le deck n'apparaît que si la page a des `slides`.

## 2. Rôles

Chaque rôle est une page de `content/roles/` (ex. `conferencier.md`). Le layout `roles/single.html` liste **tout** contenu du site dont le front matter `roles` contient le rôle (opérateur `intersect`). Le layout `roles/list.html` rend l'index de la section. Le libellé affiché est le nom de fichier — nommer les pages en français simple.

## 3. Deck lié à une publication

Ajouter un bloc `slides` avec `content` (mode collection) :

```yaml
slides:
  content:
    - part: "Décider"
    - statement:
        eyebrow: "Décision 1"
        texte: "Nommer un **responsable IA**."
```

L'article affiche alors un bouton « Ouvrir les slides » vers `/presentation.html`, et l'index des publications affiche le même lien.

## 4. Déclinaisons de slides (le module attrayant)

Deux clés de front matter, sur n'importe quel deck **ou** publication à slides :

- `colorway` — palette prête à l'emploi (`layouts/_partials/presentation/colorways.html`) :

  | clé | fond | encre | accent | ambiance |
  | --- | --- | --- | --- | --- |
  | `nuit` | `#050e46` | `#cdd9f8` | `#8fa8e8` | bleu clair sur bleu nuit — accessibilité, standards |
  | `vin` | `#7a1550` | `#f5cf00` | `#ffd84d` | or sur lie-de-vin — créativité, culture |
  | `encre` | `#0b0b12` | `#f2f3f8` | `#e8c030` | blanc sur noir — éditorial, manifeste |
  | `sauge` | `#eef3ea` | `#1d3418` | `#3e7a46` | encre verte sur crème — écoconception |
  | `papier` | `#f7f6f2` | `#151d34` | `#4631d4` | défaut Sligo |

  Jetons posés : `--sligo-bg` `--sligo-ink` `--sligo-muted` `--sligo-line` `--sligo-blue` (slides `part`) `--sligo-red` (slides `focus`) `--sligo-violet` (accent, liens) `--sligo-cover` (fond de couverture). Un `theme:` explicite reste prioritaire clé par clé.
  Fonctionne dans les **deux modes** de rendu (`reveal` et flat `simple.css`).

- `font` — fonte d'affichage des titres porteurs (couverture, `part`, `statement`, `stat`, titre `fit`) :

  | clé | fonte | licence |
  | --- | --- | --- |
  | `optician` | Optician Sans / Optiker-K | voir `static/assets/fonts/optician/README.txt` |
  | `subjectivity` | Subjectivity Serif Black | SIL OFL 1.1 (`static/assets/fonts/subjectivity/OFL.txt`) |
  | `bungee` | Bungee | SIL OFL 1.1 (`static/assets/fonts/bungee/OFL.txt`) |

- Badge de couverture : `authors` + `event` + `date` dessinent le badge rond bas-droite (mode collection uniquement).

Démo : `exampleSite/content/decks/slides-impact/index.md` (`nuit` + `optician` + badge).

## 5. Installation côté site consommateur

Deux points d'attention (Hugo 0.145+ vérifié sur 0.167) :

1. **La cascade au niveau thème n'est pas lue par Hugo** : la déclencher dans la config du site :

   ```toml
   [[cascade]]
     outputs = ["HTML", "presentation"]
     [cascade.target]
       path = "/publication/**"
   ```

2. **Résolution du module** : si le site a un `go.mod` exigeant `github.com/lowdit/sligo vX.Y.Z`, Hugo lit la version publiée (cache), pas la copie locale. Pour développer localement :

   ```sh
   # go.mod du site (jamais en CI)
   replace github.com/lowdit/sligo => ../sligo
   ```

## 6. Ne pas faire

- Pas de `theme:` où un `colorway:` suffit (sauf ajustement ponctuel d'un jeton).
- Pas de nouvelle composition de slide pour « faire joli » — les palettes et fontes changent l'écran, pas le vocabulaire.
- Pas de palette ajoutée au hasard : chaque colorway doit passer le contraste de la slide `part` (texte blanc sur fond `blue`).
