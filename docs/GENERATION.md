# Génération « à la volée » — le cadre

*Sligo Alpha · génération assistée des publications*

La vitesse vient de la contrainte, pas de la liberté de l'IA. Chaque publication naît d'un **brief de 5 minutes**, d'un **plan posé d'abord**, d'une **liste fermée de sources**, d'un **style fixé** et d'une **passe de contrôle** avant assemblage. Hors de ce cadre : pas de génération.

---

## 1. Le flux — cinq passes

| Passe | Qui | Dure | Sortie |
| --- | --- | --- | --- |
| 0. Brief | Humain | 5 min | titre, `kind`, rôles, angle, sources désignées |
| 1. Plan | IA | 2 min | squelette h2/h3 du gabarit (§4) — **aucun texte rédigé** |
| 2. Validation du plan | Humain | 1 min | plan approuvé ou corrigé |
| 3. Rédaction | IA | à la volée | corps selon le gabarit + style (§3) |
| 4. Contrôle | IA puis humain | 5 min | checklist §5 passée, chaque chiffre rattaché à une source |
| 5. Assemblage | IA | 2 min | publication Hugo créée (archétype `--kind`), deck extrait |

**Ne jamais fusionner les passes.** La passe 1 sans brief → vaisseau vide. La rédaction sans plan validé → le style dérive.

## 2. Sources — liste fermée

L'IA ne cite que ce qui suit. Toute autre source est **interdite** sauf demande explicite dans le brief (et alors : URL + note dans `resources`).

| Dépôt (local) | Ce qu'on y prélève |
| --- | --- |
| `lowdit-observer/data/parcs/<slug>/` | **données primaires** : déclarations et audits de conformité (159 sites et plus), exports Frago `content/audits/` |
| `frago/audits/` | rapports de synthèse déjà produits (structure + chiffres datés) |
| `metago/` | métadonnées de collecte, historique des missions |
| `accessibility-hub-PS/`, `accessibility-digitalinclusion/`, `accessibility-courses/` | contenus métier, pedagogie, retours terrain |
| `bertrandkeller.github.io/content/` | le corpus d'articles Bertrand Keller (angle, vocabulaire) |
| Normes officielles | RGAA 4.1 (accessibilite.numerique.gouv.fr), WCAG 2.1/2.2 (w3.org), EN 301 549, AI Act — citées par référence exacte |

Règles de citation : chiffre → **source + date de collecte** ; norme → numéro (ex. RGAA 10.6, WCAG 2.1 SC 1.3.1) ; constat de géant (profil type audit sous NDA) → **jamais nommé** sans accord.

## 3. Style — règles non négociables

Extraites du corpus existant (`bertrandkeller.github.io`). Elles valent pour synthèse, rapport, livre.

1. **Phrases courtes.** Une idée par phrase. Point final, pas de subordonnée à trois étages.
2. **Le couple causa-⇒-effet.** Pattern maison : affirmation, puis « **Résultat :** conséquence concrète ».
3. **Listes `<b>titre</b>` + explication.** Chaque item : **intitulé en gras**, retour, phrases qui expliquent (2–4).
4. **Guillemets pour l'ironie.** « classique », « boîte noire » — les termes acceptés méritent la focalisation, pas le dénigrement.
5. **Vocabulaire accessible.** Interrompre le jargon ; une notion technique s'accompagne de son explication en clair.
6. **Aucun superlatif marketing.** Pas de « révolutionnaire », pas d'emoji, pas d'anglicisme si l'équivalent français existe.
7. **« On » collectif, vouvoiement neutre.** Pas de tu sur le lecteur ; « on observe », « l'organisation décide ».
8. **Titres qui affirment.** « Le droit décide de nos interfaces », pas « Introduction au cadre juridique ».

## 4. Gabarits de plan par `kind`

- **`synthese`** (≤ 500 mots) : l'angle en 3 phrases → « Ce qui change » (bullets) → « Ce qu'il faut décider » (les 5 `points`) → deck (1 `statement` par point).
- **`rapport`** (1 200–2 500 mots) : Contexte et périmètre → Méthode → Constats (analysés, pas listés) → Plan d'action priorisé → Suivi et rebouclage. L'IA s'inspire **de la structure des rapports existants de Frago** — mentorat de structure, pas de contenu.
- **`livre`** (chapitré) : Pourquoi (chapitre d'ancrage) → 4–6 chapitres thématiques `##` titrés en affirmations → glossaire ou bibliographie en dernier chapitre.
- **deck lié** : couverture badge (`event`, `date`) → `part` pour pivoter → **1 `statement` par décision/constat** → une slide `stats` (≤ 3 valeurs sourcées) → éventuellement 1 `compare` (« ce qui aide / ce qui freine »). Jamais plus.

## 5. Passe de contrôle (avant assemblage)

- [ ] Chaque chiffre a une source listée dans `resources` (ou une source nommée du corpus) + une date.
- [ ] Chaque norme citée par sa référence exacte ; pas de paraphrase juridique non sourcée.
- [ ] Aucune promesse de conformité absolue (« légal », « conforme » → « dans le périmètre audité »).
- [ ] Style §3 : phrases courtes, patterns « Résultat : », pas de superlatifs.
- [ ] Anglais : exceptions assumées (WCAG, RGAA, EAA) ; le reste traduit.
- [ ] Rôles `roles` remplis (conferencier · professeur · freelance · referent-accessibilite).

## 6. Le prompt type (copier-coller)

```text
Génère une publication Sligo selon docs/GENERATION.md.
Brief : kind: <synthese|rapport|livre> — sujet <X> — angle <Y>.
Sources autorisées : <chemins listés, max 4>.
Passe 1 : montant uniquement le plan h2/h3 du gabarit, aucun texte.
Attends ma validation du plan avant la rédaction.
Style : passe de contrôle incluse, chiffres toujours source+date.
```

## 7. Gouvernance

- L'IA produit, **l'humain publie** — pas de commit, push ou mise en ligne sans accord (règle du workspace `lowtech-dev-method/`).
- Les publications avec des données client (parcs Observer sous engagement) restent hors dépôt public — vérifier le périmètre du dépôt cible avant `hugo new`.
- Le cadre (ce fichier) précède le contenu : toute dérive constatée à la relecture corrige **d'abord le cadre**.
