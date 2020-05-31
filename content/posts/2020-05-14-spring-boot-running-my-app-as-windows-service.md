---
date: 2020-05-14
title: 'Career Notes for Engineers and Designers - Part 1'
template: post
thumbnail: '../images/spring.png'
slug: spring-boot-running-my-app-as-windows-service
published: true
categories:
  - Spring
tags:
  - Spring
  - First step
---
##  Spring Boot: Executer mon application comme une service windows

Nous savons que nous pouvons exécuter des applications Spring Boot empaquetées sous forme de fichiers WAR sous des serveurs d'applications Java comme Apache Tomcat. 
Mais nous pouvons même éviter un tel serveur d'applications et exécuter directement l'application Spring Boot.
Pour cela, nous avons juste besoin de créer l'application avec JAR come packaging. 
Ce fichier peut être exécuté comme n'importe quelle autre application Java en appelant simplement à partir de la console: 
```console
java -jar my-app.jar
```
C'est bien à des fins de test, mais pour l'environnement de production, nous devons l'exécuter dans une sorte de mode de service. Sur CentOS 7, par exemple, nous connaissons les fichiers de configuration ``systemd`` qui définissent le service à exécuter.

Sur Windows, nous avons la possibilité d'utiliser de créer un service afin qu'il se lance au demarrage du système. Ainsi comment créer un service windows à partir de notre application service ?

Pour le faire, nous allons utiliser un outil developpé par [Oleg Nenashev](https://github.com/winsw)

1. telecharger l'outil que nous allons utilisé à l'adresse [Ici](https://github.com/winsw/winsw/releases/)
2. créer un dossier et placer votre executable spring.
2. Dans ce dossier,placer les fichiers `WinSW.NET4` et `WinSW.NETCore31.x64`  provenant de l'outils précedement téléchargé.
3. créer un fichier de configuration comme celui qui suit: 
```xml
<service>
  <!-- ID of the service. It should be unique across the Windows system-->
  <id>Sochitel</id>
  <!-- Display name of the service -->
  <name>Sochitel Service (powered by PKF Research Center)</name>
  <!-- Service description -->
  <description>description</description>
  
  <!-- Path to the executable, which should be started -->
  <executable>java</executable>
  <arguments> -jar %BASE%\my-app-name.jar</arguments>
</service>
```
4. une fois la configuration terminée, executer la commande
```terminal
WinSW.NET4.exe install
```
5. Après cela, vous devez executer 
```terminal
net start Sochitel
```
Après l'éxecution des commandes suivants, vous verrez apparaitre des fichiers de log:
- WinSW.NET4.wrapper.log qui contient des informations sur l'installation du service
- WinSW.NET4.out.log qui contient toutes les impressions / journalisation que notre application effectue
- WinSW.NET4.err.log qui contient des messages d'erreur capturés à partir de notre application