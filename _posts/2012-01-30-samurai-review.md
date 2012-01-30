--- 
layout: post
permalink: /samurai-review.html
date: 2012-01-30 23:59
title: "Samurai: Recap"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

The end of another hectic week of code shenanigans is on us, and it's time to share what we have.  This week we went in to make a game, the server back-end and an XNA front-end, and I don't think we did too badly for a week's effort.

The week started off with a lot of discussion, drawing up plans and a lot of input in the room before we settled on an idea - and that idea was [Samurai](https://github.com/Code52/Samurai) - not just a codename, but a complete theme. 


![](/img/week4-samurai-screen.png)

Samurai is a tiled, turn-based, player-vs-player game that pits one army against another, a genre that has had many different entries over the years.

## Current Features

How far did we get this week?

 * We have a good basis for the front-end with a lot of hard work putting a framework in place thanks to [Quandtm](https://twitter.com/#!/quandtm) and some great tile designs by [Aeoth](https://twitter.com/#!/aeoth).
 * A back-end built on MVC4 that got a fair way, with map and unit sections, game lobbies and user support, that can be brought in by any client.
 * The start of an iOS client built on Monogame.
 
 
![](/img/week4-samurai-tiles.png)
 
How far do we have to go?

 * We're planning on finishing up some unit control and movements on the WP7 client before we start doing some more maps and a play-test.
 * We have some back-end work to do on resetting accounts, and showing some games on the administration side of the website.
 * And much more to do in future weeks as we tune and build the game out - come and [join in](https://github.com/Code52/Samurai)!


![](/img/week4-samurai-end.png)


## The Weekly Fun stats

There were 10 contributors this week and a lot of effort put in to get this off the ground.

The [punch card graph](https://github.com/Code52/Samurai/graphs/punch_card) from GitHub shows how busy we were across the week.

<img src="https://chart.googleapis.com/chart?chs=800x300&chds=-1,24,-1,7,0,9&chf=bg,s,efefef&chd=t:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23|0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7|0,2,0,1,2,0,0,0,0,0,1,0,0,3,8,3,3,8,1,0,6,3,7,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,5,0,0,2,3,1,0,0,0,3,0,1,3,1,0,0,0,0,3,0,5,0,2,0,1,0,1,4,2,9,3,5,1,0,1,0,0,0,0,0,0,5,2,1,0,6,0,1,2,6,7,2,0,5,7,1,3,3,0,1,0,0,0,0,0,2,2,1,1,1,0,1,1,1,1,0,1,3,8,0,0,0,0,0,1,0,0,0,0,2,4,2,5,2,3,0,0,0,0,1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&chxt=x,y&chm=o,333333,1,1.0,25.0&chxl=0:||12am|1|2|3|4|5|6|7|8|9|10|11|12pm|1|2|3|4|5|6|7|8|9|10|11||1:||Sun|Mon|Tue|Wed|Thr|Fri|Sat|&cht=s">


## What's Next?

As in previous weeks, we're still working on Samurai, and will be for some time - you can always come into the [chat room](http://jabbr.net/#/rooms/code52) and offer some help, or have a look at our [Trello board](https://trello.com/board/samurai/4f1d3d847a38f6221f1d9354) and see if there's something you'd be willing to help out on.

We have also had a lot of movement in the last couple of weeks on [MarkPad](https://github.com/Code52/DownmarkerWPF) and [Ideastrike](https://github.com/Code52/Ideastrike) and we'll be getting a post up on those changes soon!

The next project will be out tomorrow, and we think it'll be one that will be really useful for us, and the community at large - there's been a lot of talk about it in [the chat room](http://jabbr.net/#/rooms/code52) already, but no spoilers until we can get a post up tomorrow.

We appreciate all the hard work people have put in on all the projects, and a huge thanks to  [Quandtm](https://twitter.com/#!/quandtm) for all his efforts in getting the WP7 version up for us.  You guys make doing Code 52 a pleasure and we're grateful for your company on this journey.