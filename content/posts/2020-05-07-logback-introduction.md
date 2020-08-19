---
date: 2020-05-07
title: "Introduction à Logback"
template: post
thumbnail: "../images/spring.png"
slug: logback-introduction
published: true
categories:
  - Outils
tags:
  - Engineers
  - Spring
---

_In symbols one observes an advantage in discovery which is greatest when they express the exact nature of a thing briefly and, as it were, picture it; then indeed the labor of thought is wonderfully diminished._
-- GOTTFRIED WILHELM LEIBNIZ\*

Monitorer, diagnostiquer et faire le troubleshouting sont les activités important dans le cycle de vie d'une application. Le logging est au coeur de ces differents processus.
Grace au logging, il est possible de voir le comportement d'une application durant son execution. Utilise les
fonctions offertes par le système comme _System.out_ ne sont pas toujours efficaces car ils ne donnent pas assez d'information sur qualité des logs.
C'est ainsi que les infrastructures de journalisation telles que Logback sont conçues pour répondre aux besoins de
journalisation dans l'entreprise.Les infrastructures de journalisation telles que Logback sont conçues pour
répondre aux besoins de journalisation dans l'entreprise.

Les applications d'entreprise ont des exigences de journalisation avec différents degrés de complexité.
Vous devrez générer des journaux avec différents niveaux d'importance, tels que _ERROR_, _WARN_, _INFO_ et _DEBUG_.
Vous devrez également envoyer des journaux à différentes destinations, telles que console, fichier, base de données, serveur SMTP ou destination de file d'attente JMS. Tous ces besoins ne peuvent pas être resolu avec le
_System.out_.

## Logback Architecture

_Ceki Gülcü_, le fondateur de Log4J et _Sébastien Pennec_, un autre contributeur de _Log4J_, ont conçu Logback.
Avec des décennies d'expérience avec les frameworks de journalisation, ils ont conçu Logback pour qu'il soit suffisamment rapide et générique pour fonctionner dans différents environnements.
Logback est composé de trois modules:

- logback-core: forme la base de logback-classic et logback-access. Pour effectuer la journalisation, vous avez besoin de l'accès plus classique logback-classic ou logback-access.
- logback-classic: repose sur logback-core pour les services de journalisation.
- logback-access: fournit des fonctionnalités de journal d'accès HTTP aux conteneurs de servlets, tels que Tomcat et Jetty.

Dans cet article, nous explorerons le log-back-classic, que j'appellerai logback à l'avenir. Logback implémente nativement l'API Simple Logging Facade for Java [(SLF4J)](http://www.slf4j.org/manual.html). En un mot, SLF4J est une façade pour divers cadres d'exploitation. En tant que développeur, vous écrirez du code de journalisation en vous appuyans sur l'Api de _SLF4J_.

Les principaux composants de Logback sont _loggers_, _appenders_ and _encoders/layouts_. Les composants
fonctionnent ensemble pour fournir au développeur un contrôle total sur la façon dont les messages sont enregistrés, formatés et où ils sont signalés.

### Logger

Les Loggers sont les composants qui effectuent le gros du travail de journalisation. Ils capturent les données de journalisation et les transmettent à une destination _appenders_. Les Loggers utilisés dans une application sont
généralement organisés en une hiérarchie et un enregistreur racine se trouve en haut de la hiérarchie. C'est le [LoggerContext](http://logback.qos.ch/apidocs/ch/qos/logback/classic/LoggerContext.html) qui est responsable de la création des enregistreurs et de leur organisation dans une hiérarchie.

Les Loggers conservent la hiérarchie. Par exemple, un Logger nommé _test_ est le parent d'un logger, nommé _test.springframework_ et l'ancêtre de l'enregistreur, nommé _test.springframework.blog_.

Outre l'héritage des Loggers, un concept important de déconnexion est l'héritage de niveau, également appelé niveau effectif. Vous pouvez attribuer des niveaux aux Loggers. Logback prend en charge les niveaux _TRACE_, _DEBUG_, _INFO_, _WARN_ et _ERROR_.
