---
date: 2020-08-19 05:35
title: "Feux en Prod"
template: post
thumbnail: "../images/career.png"
slug: arret-des-services
published: true
categories:
  - Incident en prod
tags:
  - Kong
  - Certificats
  - MSC
---

##### Feux en Prod

Durant la journée du 18, nous avons reçu des coups de fils de la hierachie et de nos clients,
**Allo, la plateforme est down**, Nous avons commencé le diagnostic. Nous nous sommes rendus compte que
le certificat avait expiré. C'est quoi un certificat, demande à [Digicert](digicert.com), il se connaisse mieux.
Bon, comment s'y prendre pour resoudre le problème, nous devons juste changer les configs dans notre gateway.
Eh hope, c'est fait ! Seulement la gateway à des soucis. C'est alors que nous demandons à [Kong](Kong.fr) comment faire ?
Il nous renvoie vers la documentation et découvrons ces APIs.

Leçons apprises:

- monitorer la validité de son certificat :
  Facile à dire, plus qu'à faire. Mais ceci est resolu avec une bonnne organisation.
- Maitriser la documentation des technologies que l'on utilise: Un bon outil doit avoir une documentation simple et intutif.
- Maitriser les commandes : notamment la commande **curl**, c'est simple, leger et par défaut sur chaque serveur Linux.
