--- 
layout: post
permalink: /carnac-review.html
date: 2012-02-20 23:00
title: "carnac review"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

What started out as an excuse to watch [Youtube](http://www.youtube.com/watch?v=9m_dT0wsrGI) clips and make jokes about turbans quickly turned into a neat little tool called Carnac, for those people who want to display their keyboard activities on screen.

<br />

<center>![](/img/carnac-logo.png)</center>

## Progress!

After a week of WPF and Win32, we've implemented a number of awesome features already:

 * Using WPF to render an "invisible" window and process key presses under the hood.
 * Overlaying activity over the current window - position, opacity, colours, font-size all customizable.
 * Detect the active application and match up a shortcut with a known list of values.

A couple of other features are in progress:

 * Password mode - detect a shortcut and hide the output until the shortcut is pressed again.
 * Extending the shortcut API so that other apps can be integrated - YAML markup is used to represent the available shortcuts and can be downloaded from a remote site to the local machine.
 * Support for "modes" which eliminate the noise of some keystrokes based on configuration - only show shortcuts, only show shortcuts for XYZ, etc...

 And a few features didn't get started:

 * Tracking statistics and trends of keyboard activity - we wanted to use RavenDB as an embedded database.
 * Reporting based on historical data - just how awesome are you?

## Carnac in action

Here's a couple of videos from @shiftkey demonstrating the latest build of Carnac (you can download this build from [the project site](https://github.com/Code52/carnac/downloads) and try it out yourself).

### Customsing the Carnac UI

<iframe src="http://player.vimeo.com/video/37101409?title=0&amp;byline=0&amp;portrait=0" width="1051" height="591" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

### R# shortcuts in Carnac

<iframe src="http://player.vimeo.com/video/37100863?title=0&amp;byline=0&amp;portrait=0" width="1051" height="591" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

## What's next for Carnac?

We're getting the groundwork together the next project at the moment, but we're looking for people to help out with:

 * testing - there may be some issues with Windows XP and Vista environments.
 * finding and fixing bugs - all the hot forking action is on [GitHub](http://github.com/code52/carnac).
 * grabbing a task from [Trello](https://trello.com/board/carnac/4f38fe6ec2fe26391c4e7d34) - if you want to get into some dev, get in touch and we can add you to the board.
 * hanging out in the [JabbR](http://jabbr.net/#/rooms/code52) room if you have any input or suggestions for features.

