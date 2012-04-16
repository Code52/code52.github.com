--- 
layout: post
permalink: /dodo-recap.html
date: 2012-04-16 23:00
title: "dodo recap"
author: "@shiftkey"
comments: true
---

The Code52 team had some big news over the weekend which I will address in a later post, but before we should get to the fun stuff about dodo.

## What's been done so far 

This week has been about setting up a baseline and implementing core functionality.

At this point in time, the project is split into two distinct features:

 - *dodo* - a Windows 8 Metro application.
 - *boxkite* - a library for interacting with the Twitter API in .NET 4.5 Metro. 

## dodo

 The application currently supports:

 - OAuth login
 - Browsing the user's timeline, mentions, retweets and messages.
 - settings storage - persisting the user's token between sessions
 - diagnostics capture - so that we can log messages to the application's sandbox for debugging purposes.

Other functionality which as been started on but not integrated into master includes

 - Grouping tweets by relative time ("just now", "last hour")
 - Semantic Zoom - collapse a group of tweets to see just the user's avatars
 - User Streams - rather than querying for data periodically, Twitter can stream data down to an open connection inside the app.

 **TODO: screenshot**

## boxkite

Once boxkite is feature-complete, tested and documented, it will move to a separate repository with NuGet packages available so that people can consume the API. 

There are no immediate plans for boxkite to support other framework versions, as:

 - it uses a number of .NET 4.5-specific features - including async/await and WebAuthenticationBroker.
 - there are a number of [existing libraries](https://dev.twitter.com/docs/twitter-libraries#dotnet) out there for .NET apps 
 - I would prefer to focus on the dodo application itself in the short term.

 If you still have the urge to check out a shiny new Twitter library, [Matt Hamilton](http://twitter.com/mabster) spent the week building a .NET 4 client called [Budgie](http://matthamilton.net/budgie) that uses the Task Parallel Library heavily.

## The future of dodo 

Yes, that's a joke.

I'm keen to continue building this application for several reasons:

 - many developers have been interested/curious to learn about it - while the concept of a Twitter app are familiar, being able to see the internals is where the real educational value lies.
 - I still have an urge to create a different experience for people to interact with Twitter. With the basics done, the next step is to focus on the UX.
 - There is enough lead time to have something ready for when Windows 8 ships.
 - There is still [a lot of work still to do](https://trello.com/board/dodo/4f82e9dfc10221fb0db2cff2).

 And yes, others are more than welcome to get involved. Come [hang out](http://jabbr.net/#/rooms/code52).

