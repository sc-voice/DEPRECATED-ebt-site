---
title: Customize Website
description: Change your EBT website language, etc.
img: faizan-saeed-PPeZwFWnWNE-unsplash.png
alt: Generic picture of bespoke
order: 2
---

EBT websites are customized with `ebt-site.yaml` configuration file
in the Github repository for your EBT website.
Use Github to edit `ebt-site.yaml` with the following customizations.

Customization changes will trigger a website rebuild, 
which will take a few minutes.

### Website Language (`ebt_lang`)
The `ebt_lang` option restricts the EBT website
to a single language.
EBT websites dedicated to a single country or language
will often set this option. 

The `ebt_lang` option is normally disabled
and commented out with a leading `#`:

`#ebt_lang: de`

For example, to restrict the EBT website to German,
we remove the `#` and
specify the ISO code for German, which is `de`:

`ebt_lang: de`




