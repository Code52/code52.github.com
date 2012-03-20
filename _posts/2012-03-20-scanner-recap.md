--- 
layout: post
permalink: /scanner-recap.html
date: 2012-03-20 23:59
title: "Recap - Enhance"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

So, the week is over and it's time to report - so let's talk about where we're at.

## How'd we go?

The week started well, @tobin had some good code that was working and scanning well and it wasn't fully featured but it was working, so that's great!  .... and then we tested it on @aeoth's scanner.

From there it was an incredibly painful experience trying to work out how WIA really works, and the best way to proceed.

Having a new scanner that covered for issues in requests made it difficult to test the problems that would arise for other people, but we got to a place where we have some simple scanning going in an app that looks pretty great.

![](/img/scanner-recap-front.png)

Unfortunately, given the problems we had with WIA we didn't get much further.

We have had a few volunteers offering help, even taking tasks but unfortunately they couldn't commit in before the end of the week - we've even had people volunteer right towards the tail end of the week, and we look forward to what they'll bring to the project.

![](/img/scanner-recap-scan.png)

## What did we get done?

We've got a simple app running that allows the user to navigate between a number of tabs at the top of the page. The first page we implemented lists off the transactions associated with the current user and allows for new items to be added.

For those who are curious about building WinJS apps, in its current form the app demonstrates:

 - navigation between pages
 - customising the domain model
 - binding data to the screen
 - using some of the new controls including lists and flyouts
 - styling markup using CSS and the new *-ms* properties and values.

## What's next?

We have a few jobs up on [Trello](https://trello.com/board/enhance/4f24963edbbed1ab5a11c5ad) and we're alway open to having more - or coming in and checking out the code on [Github](http://github.com/Code52/enhance) and doing some work on helping making it better with us.

As always, we'll be working further as the weeks go on - and especially with our [Working Bee](http://code52.org/working-bee) weeks!