---
date: 2020-05-01
title: ' Time for injection'
template: post
thumbnail: '../images/career.png'
slug: time-for-injection
published: true
categories:
  - Conception
tags:
  - Engineers
  - note of lectures
  - Design pattern
---
`
“We shape our buildings, thereafter they shape us.”
Winston Churchill
`

Dependency injection offers a unique and concise solution to the problem of constructing object graphs, with a strong emphasis on unit testing.
The crux of this solution is the fact that all your code is freed from constructing dependencies. 
Code written with DI in mind is behaviorally focused and without distracting clutter. Why is this important? While the answer may seem self-evident (hard to argue with the less and more precise), it is well worth spelling out:

- **Behaviorally focused** - Presumably, you set out to write code toward a specific purpose, and that purpose is not to construct more objects! Whether writing an email system, a game, or an enterprise messaging system, your primary focus is the behavior of the system. When architectural concerns (such as constructing and locating services) impinge on this logic, it unnecessarily distracts from the original purpose.
- **Modular** - Code designed in discrete, modular units is not only easy to maintain, but it is reusable and easy to package. Individual units are structurally simple to work with. Understanding whether code meets specified requirements is often a difficult proposition for developers. Modular code is focused on small functional subsets (for instance, a spellchecker) and thus is easier to develop.
- **Testable** - Since modules are easy to test for general, purposed behavior without specific awareness of the overall system, it follows that they provide for more robust code. While nominal testability is a benefit in itself, there is much more that concise, loosely coupled code purports. The ability to swap out dependencies with mock counterparts is crucial when testing objects that make use of expensive resources like database connections.

### Bootstrapping the injector

The dependency injector is itself a service like any other. And like any service, it must be constructed and prepared before it can be used. This bootstrap of the injector occurs before any object in the application can benefit from DI. When and how the injector is bootstrapped is often specific to the kind of application in question. 

