---
date: 2020-04-20 09:20
title: "Technical debt - Part 1"
template: post
slug: technical-debt-part-one
published: true
categories:
  - Software
tags:
  - Engineers
---

### Technical Debt : The introduction [Source](https://www.agilealliance.org/introduction-to-the-technical-debt-concept/)?

    Some problems with code are like financial debt. It’s OK to borrow against the future, as long as you pay it off. know to as "Technical Debt"
    Ward Cunningham

Ward used it the first time when he was developing a financial application in Smalltalk. He wanted to justify to his boss the refactoring they were doing, so he used a financial analogy:

      If we failed to make our program align with what we then understood to be the proper way to think about our financial objects, then we were going to continue to stumble on that disagreement which is like paying interest on a loan.

Later, in 1992, at the OOPSLA conference, Ward provided additional details 
(slightly paraphrased here based on feedback from Ward):

    Shipping first-time code is like going into debt. A little debt speeds development so long as it is paid back promptly with refactoring. The danger occurs when the debt is not repaid. Every minute spent on code that is not quite right for the programming task of the moment counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the debt load of an unfactored implementation, object-oriented or otherwise.

The Technical Debt concept is **an effective way to communicate about the need for refactoring and improvement tasks** related to the source code and its architecture.

If you are able to *estimate roughly the time needed for fixing what is not right* into your code, the **principal of your debt**, you could compare this *information to other project* data, like remaining days before release date. This estimation will help you to understand your situation and plan repayment activities.

Technical Debt may emerge during the life of a project. At time progresses you may understand something new about your application domain. 
You may now view your initial architecture as having acquired technical debt.

### Are there other types of debt?
Not all software projects issues are Technical Debt:
1. Identified defects are not Technical Debt. They are Quality Debt.
2. Lack of process or poor process is not Technical Debt. It is Process Debt
3. An example is Configuration Management Debt.
4. Wrong or delayed features are not Technical Debt. They are Feature Debt.
5. Inconsistent or poor user experience is not Technical Debt. It is User Experience Debt.
6. Lack of skills is not Technical Debt. It is Skill Debt.

### Is Technical Debt bad?
Taking short cuts in order to put earlier a viable product on the market which delivers business value is generally not a bad decision. But one should be conscious that  the Technical Debt incurred will hurt sooner or later.

At some time, the team should pay back at least a part of the accumulated Technical Debt.  They are different ways to do that, and there is no magic one that fits all situations. In order to fully understand the situation and establish the relevant strategy, the Technical Debt should be made fully transparent and analyzed.