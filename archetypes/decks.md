+++
title = "{{ replace .Name "-" " " | title }}"
subtitle = ""
type = "presentation"
date = {{ .Date }}
authors = []
event = ""                # badge de couverture : orateur · événement · date
colorway = "nuit"         # nuit | vin | encre | sauge | papier
font = "optician"         # optician | subjectivity | bungee (fonte d'affichage des slides)
image = ""
description = ""
slides = { content = [
  { part = "Introduction" },
  { title = "Première slide", texte = "Une idée par slide." },
  { statement = { eyebrow = "À retenir", texte = "Une seule phrase forte par slide." } },
] }

+++
