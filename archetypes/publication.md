+++
title = "{{ replace .Name "-" " " | title }}"
kind = "rapport"          # synthese | rapport | livre
roles = []                # conferencier | professeur | freelance | referent-accessibilite
outputs = ['HTML', 'presentation']
date = {{ .Date }}
subtitle = ""
authors = []
description = ""
toc = true                # sommaire (rapport, livre)
resources = []            # [{title = "", url = "", note = ""}]

# Optionnel — deck lié à la publication (vue /presentation/, déclinaisons : colorway, font).
# slides = { content = [ ... ] }

+++
