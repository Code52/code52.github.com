--- 
layout: post
permalink: /github-for-outlook.html
date: 2012-02-21 23:00
title: "GitHub Tasks for Outlook"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

Unfortunately this is looking like a busy week for many of us, so we're taking the time out this week to do a relatively straightforward idea which was spawned recently in the JabbR room.

While we are heavy users of GitHub, the notifications area of GitHub leaves much to be desired. We've already experimented with mobile clients and desktop clients to make this stuff easier, but a conversation last week around "why not use Outlook?" lead to a candid discussion and a simple specification.

## What will GHT4O do?

The tool should give you an overview of the important things you need to address for the projects you look after:

 * New and updated Pull Requests.
 * New and updated Issues.
 * Display notifications as configured on GitHub.
 * View and respond to comments from inside Outlook.
 * Leverage Outlook features like email, labels and perhaps tasks to integrate GitHub work with the rest of your day-to-day work.


## The technology under the hood

The most popular tool of building addins for Microsoft Office is called Visual Studio Tools for Office - which allows .NET apps to integrate and behave like native Office addins. There's a bunch of resources on getting started with VSTO over on [MSDN](http://msdn.microsoft.com/en-us/office/hh133430).

We will be using WPF for the UI, but the real project we will leverage is [Jake Ginnivan's](http://twitter.com/JakeGinnivan) [VSTOContrib](http://vstocontrib.codeplex.com/) libraries - this will allow us to quickly scaffold the code without getting bogged down in COM interop woes.

We're also talking with @aeoth about making use of some of his recent work on a desktop port of the ["Milestone"](http://quandtm.github.com/Milestone/) GitHub  client for WP7. This isn't cruical to the end goal of the week, but after using Reactive Extension in Carnac we're keen to make use of it in other scenarios.


## How can I get involved?

The initial project is up on [GitHub](http://github.com/Code52/github-for-outlook). The [Trello board](https://trello.com/board/github-tasks-for-outlook/4f4234cdbfa22c0070ac4caa) will be updated over the course of today/tomorrow as we sketch out features and workflow ideas to implement. And of course the [JabbR](http://jabbr.net/#/rooms/code52) room is worth checking out too!