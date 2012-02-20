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



* Using @jakeginnivan's VSTO helper to build off as a framework
* WPF App
* Settings page to hook in to your github api key.
* Enumerate your projects
* Create a new issue from an email, assign it against a project, apply a label


* Could also create a task in outlook for that, link back to the issue in Github

* Not sure what else we could do to add subsequent emails back to a task as comments

## How can I get involved?

The initial project is up on [GitHub](http://github.com/Code52/github-for-outlook). The [Trello board](https://trello.com/board/github-tasks-for-outlook/4f4234cdbfa22c0070ac4caa) will be updated over the course of today/tomorrow as we sketch out the UI and features to implement. And of course the [JabbR](http://jabbr.net/#/rooms/code52) room is worth checking out too!