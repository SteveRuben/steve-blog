---
date: 2020-04-20 09:20
title: "Java File IO: Modern APIs to Create, Read, Write & More"
template: post
thumbnail: "../images/career.png"
slug: java-file-io-apis
published: true
categories:
  - Engineering
tags:
  - Software
  - Java
---

## Java & Files: An Introduction

Java has two file APIs.
  - The original java.io.File API, available since Java 1.0 (1996).
  - The newer java.nio.file.Path API, available since Java 1.7 (2011).

### What is the difference between the File and Path APIs?
The old file API is used in a ton of older projects, frameworks and libraries. Despite its age, it is not deprecated (and likely never will be) and you can still use it with any of the latest Java versions.

Nevertheless, ***java.nio.file.Path*** does everything ***java.io.File*** can, but generally in a better way and more. 
A few examples:
- File Features: The new classes support symlinks, proper file attributes and metadata support (think: PosixFileAttributes), ACLs and more.
- meaningfull function response: E.g. when deleting a file, you get an exception with a meaningful error message (no such file, file locked, etc.), instead of a simple boolean saying false. Also The `rename` method behaved inconsistently across volumes and file systems: Some were easily renamed, but others were not.
- Decoupling: Enabling support for in-memory file systems, which we’ll cover later.


### Which file API should I use?
For the reasons mentioned above, if you are starting a new Java project, it is highly recommended to use the Paths API over the File API. (Even though file reads so much nicer than path, doesn’t it?)

Hence, we will focus solely on the Paths API in this article [Marco Behler](https://www.marcobehler.com/guides/java-files).

references : 

- [Oracle officiel](https://www.oracle.com/technical-resources/articles/javase/nio.html)
- [Marco Behler](https://www.marcobehler.com/guides/java-files)