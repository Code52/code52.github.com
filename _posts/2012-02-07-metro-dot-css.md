--- 
layout: post
permalink: /metro-dot-css.html
date: 2012-02-07 08:00
title: "metro.css"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

[This idea](https://code52.uservoice.com/forums/143105-code-52/suggestions/2465600-metro-css-built-on-bootstrap) started out as something straight-forward which we suggested before Code52 had officially started, and we've had a couple of projects touch on the [Metro design language](http://en.wikipedia.org/wiki/Metro_(design_language)) - our [Markpad](http://code52.org/DownmarkerWPF/) app in particular. And with Windows 8 nudging towards a new public build, more and more people are curious abbout it.

## metro.css - using Bootstrap?

Twitter just unveiled [Bootstrap](http://twitter.github.com/bootstrap/) V2. Bootstrap is a lean CSS/JS template for getting a website up and running with grid layout, responsive design, cross-platform support and a bunch of other bells and whistles.

While we might not use Bootstrap *specifically* (while the layout portions would be very relevant, how much time would be spent unsetting styles for buttons and other elements?), we want to see something similar for helping people build Metro-style applications.

## More than just a CSS file

As this may appear to be a simple task, we are currently discussing specific goals to acheive:

 * Is it worth following the Bootstrap conventions for styles and structure, or do we not gain much given the differences in style.
 * A package to integrate `metro.css` with an ASP.NET MVC/T4 templates - reuse what @Tobin has build with his [NuGet package](http://nuget.org/packages/MahApps.Twitter.Bootstrap)
 * A template for a Liquid-based static site - implement a better template for the Pretzel default sites.
 * CSS3 and/or Javascript animations and transitions
 * Javascript to help create metro controls like Pivot and Panorama
 * (if we get time) themes for Wordpress and Funnelweb, or even other templating systems (suggest your own)
 * and perhaps other things we can conceive...


## Follow the chatter

This week will likely be a highly-entertaining process of discussing, iterating and experimenting with style, layout and usage. We use [JabbR](http://jabbr.net/#/rooms/code52) heavily to discuss stuff in real-time - if you want to get involved, drop in on the action. If you can't keep up, don't worry - JabbR also supports browsing the conversation history of a room (just scroll up to go back in time), so you can catch up on the discussion easily.

## How can I get involved?

The initial project is up on [GitHub](http://github.com/Code52/metro.css). The [Trello board](https://trello.com/board/metro-css/4f2fd841a5146fa91fbff127) will be updated over the course of today/tomorrow as we sketch out what we'd like to demonstrate.

Got some opinions on Metro UI?  Hang out in the chatroom at [JabbR](http://jabbr.net/#/rooms/code52) and join in on the fun!