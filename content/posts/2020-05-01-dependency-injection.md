---
date: 2020-05-01
title: ' Embracing dependency injection'
template: post
thumbnail: '../images/career.png'
slug: embracing-dependency-injection
published: true
categories:
  - Conception
tags:
  - Engineers
  - note of lectures
  - Design pattern
---

*“We all agree that your theory is crazy, but is it crazy enough?“*
Niels Bohr

The idea of connecting the pipes together, or giving a client its dependency, is sometimes also referred to as “injecting” objects into one another and other times as “wiring” the objects together.

While construction by hand definitely helps with testing, it has some problems, the most obvious one being the burden of knowing how to construct object graphs being placed on the client of a service. If I use the same object in many places, I must repeat code for wiring objects in all of those places. Construction by hand, as the name suggests, is really tedious! If you alter the dependency graph or any of its parts, you may be forced to go through and alter all of its clients as well. Fixing even a small bug can mean changing vast amounts of code.

Another grave problem is the fact that users need to know how object graphs are wired internally. This violates the principle of encapsulation and becomes problematic when dealing with code that is used by many clients, who really shouldn’t have to care about the internals of their dependencies in order to use them. There are also potent arguments against construction by hand that we will encounter in other forms in the coming chapters. So how can we offload the burden of dependency creation and not shoot ourselves in the foot doing so? One answer is the `Factory pattern`.

### The Factory pattern
The beauty of this approach is that client code only needs to know which Factory to use to obtain a dependency (and none of its internals).

While the Factory pattern solves many of the problems with construction by hand, it obviously still leaves us with significant hurdles to overcome. Apart from the testability problem, the fact that a Factory must accompany every service is troubling. Not only this, a Factory must accompany every variation of every service. This is a sizable amount of distracting clutter and adds a lot of peripheral code to be tested and maintained.

###  The Service Locator pattern
A Service Locator pattern is a kind of Factory. It is a third-party object responsible for producing a fully constructed object graph.
In the typical case, Service Locators are used to find services published by external sources; the service may be an API offered by a bank to transfer funds or a search interface from Google.

`Emailer emailer = (Emailer) new ServiceLocator().get("Emailer");`

Notice that we pass the Service Locator a key, in this case the word “Emailer.” This tells our locator that we want an Emailer.
 This is significantly different from a Factory that produces only one kind of service. 
A Service Locator is, therefore, a Factory that can produce any kind of service.
Right away this helps reduce a huge amount of repetitive Factory code, in favor of the single Service Locator.

**JNDI: A SERVICE LOCATOR**
*The Java Naming and Directory Interface (JNDI) is a good example of a Service Locator pattern. It is often used by application servers to register resources at start time and later by deployed applications to look them up. Web applications typically use JNDI to look up data sources in this manner.*

Unfortunately, being a kind of Factory, Service Locators suffer from the same problems of testability and shared state. The keys used to identify a service are opaque and can be confusing to work with, as anyone who has used JNDI can attest. If a key is bound improperly, the wrong type of object may be created, and this error is found out only at runtime.
With DI, we take a completely different approach—one that emphasizes testability and concise code that is easy to read and maintain. That’s only the beginning; as you will see soon, with DI we can do a great deal more.

##  Embracing dependency injection
With dependency injection, we take the best parts of the aforesaid pre-DI solutions and leave behind their drawbacks.

DI enables testability in the same way as construction by hand, via a setter method or constructor injection. DI removes the need for clients to know about their dependencies and how to create them, just as factories do. It leaves behind the problems of shared state and repetitive clutter, by moving construction responsibility to a library.

### The Hollywood Principle
The Hollywood Principle is `Don’t call us; we’ll call you!` Just as Hollywood talent agents use this principle to arrange auditions for actors, so do DI libraries use this principle to provide objects with what they depend on.
This is similar to what we saw in construction by hand (sometimes referred to as manual dependency injection).
There is one important difference: The task of creating, assembling, and wiring the dependencies into an object graph is performed by an external framework (or library) known as a dependency injection framework, or simply a dependency injector.

Control over the construction, wiring, and assembly of an object graph no longer resides with the clients or services themselves. The Hollywood Principle’s reversal of responsibilities is sometimes also known as IoC.

`Notes: 
DI frameworks are sometimes referred to as IoC containers. Examples of such frameworks are PicoContainer (for Java), StructureMap (for C#), and Spring (for Java and C#).`

###  Inversion of Control vs. dependency injection
Worthy as they are of a heavyweight bout, these two terms are not really opposed to one another as the heading suggests.
You will come across the term IoC quite often, both in the context of dependency injection and outside it.
The phrase Inversion of Control is rather vague and connotes a general reversal of responsibilities, which is nonspecific and could equally mean any of the following:
- A module inside a Java EE application server
- An object wired by a dependency injector
- A test method automatically invoked by a framework
- An event handler called on clicking a mouse button

Pedantic users of the term suggest that all of these cases are consistent with its definition and that DI itself is simply one instance of IoC.

`
DEPENDENCY INJECTION
As near as I can determine, it wasn’t until Martin Fowler wrote *Inversion of Control Containers and the Dependency Injection Pattern*[3] that the term dependency injection came into popular use. The term came out of many discussions on the subject among Fowler, the authors of PicoContainer (Paul Hammant and Aslak Hellesøy), Jon Tirsen, and Rod Johnson, among others.

[3]: The article has been updated many times over the years. You can read the latest version at http://martin-fowler.com/articles/injection.html.
`
### Dependency injection in the real world

1. Apache Avalon

Apache Avalon is possibly the earliest DI library in the Java world, and it’s perhaps the first library that really focused on dependency injection as a core competency. Avalon styled itself as a complete application container, in the days before Java EE and application servers were predominant. Its primary mode of wiring was via custom interfaces, not setter methods or constructors. Avalon also supported myriad lifecycle and event-management interfaces and was popular with many Apache projects. The Apache James mail server (a pure Java SMTP, POP3, and IMAP email server) is built on Avalon.

2. Spring Framework

Spring Framework is a groundbreaking and cornerstone dependency injection library of the Java world. It is largely responsible for the popularity and evolution of the DI idiom and for a long time was almost synonymous with dependency injection. Spring was created by Rod Johnson and others and was initially meant to solve specific pains in enterprise projects. It was established as an open source project in 2003 and grew rapidly in scope and adoption. Spring provides a vast set of abstractions, modules, and points of integration for enterprise, open source, and commercial libraries. It consists of much more than dependency injection, though DI is its core competency. It primarily supports setter and constructor injection and has a variety of options for managing objects created by its dependency injector. For example, it provides support for both the AspectJ and AopAlliance AOP paradigms.


