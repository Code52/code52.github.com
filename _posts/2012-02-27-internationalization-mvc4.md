--- 
layout: post
permalink: /internationalization-mvc4.html
date: 2012-02-21 23:00
title: "Internationalization Packages for MVC4"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

Internationalization of websites - being able to render a site in different languages based on the target audience - is not a new problem, and a collection of guidance and tricks that people have shared over the years to simplify this when building ASP.NET apps is out there on the interwebs. 

So why not bring all these tricks together?

[This idea](https://code52.uservoice.com/forums/143105-code-52/suggestions/2602751-internationalis-zed-mvc4-project-template) had a massive spike of interest last week and rocketed up to the #2 spot, so we've taken that as a sign to start this off as soon as possible. Much love to [Scott Hanselman](http://hanselman.com) for suggesting the idea (indirectly) and promoting it on Twitter, and apologies for doing this during the [MVP Summit](http://mvp.support.microsoft.com/MVPsummit) when he'll be busy herding cats :)

## What are we building?

We want to put together a set of NuGet packages so that developers can add globalization and localization into a new or existing application, covering both server- and client-side components. 

The packages will contain code which people have shared that has helped them build applications - we started a discussion last week on [sync.in](http://sync.in/ltlbzbgOQx) about ideas and things we've found. This formed the initial set of features on [Trello](https://trello.com/board/internationalization-mvc4/4f49efbbd105c95e0c12332e) but we are open to other features if people want to share their own tricks.

We are also planning a demonstration website which has these features implemented, and documentation guiding developers through the features. The first priority is a C# MVC website, but we are happy to work with the VB and WebForms developers in the future to port this functionality to other scenarios once the basics are in place - so get in touch and see how you can help speed this up!

## How can I get involved?

A sample website and the scripts to generate the NuGet pacakges are up on [GitHub](http://github.com/Code52/internationalization-mvc4). The [Trello board](https://trello.com/board/internationalization-mvc4/4f49efbbd105c95e0c12332e) has some tasks which are ready to be started. 

Unfortunately you need to be granted access to the board before you can assign yourself to a task, so create an account and drop into the [JabbR](http://jabbr.net/#/rooms/code52) room to get in touch!