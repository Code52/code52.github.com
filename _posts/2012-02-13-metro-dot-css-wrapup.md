---
layout: post
title: "Metro.css: Recap"
date: 2012-02-13 21:22:12 +11:00
---

##Features
As we mentioned at the start, metro.css is built on the basis of Twitter's Bootstrap. We haven't pulled in a huge amount, just what we need - including the bootstrap grid/layout system.

Metro.css is built on top of [LESS](http://lesscss.org/) and compiled down to css, like Bootstrap, so we had a bit of a learning curve, could define our colours and work with the methods built in to LESS - it was a great experience.

###Fonts
Fonts are hard. Eventually we settled on three similar fonts to use for various platforms, with roboto being the fallback.

![](http://code52.org/metro.css/images/fonts.png)

###Colours
All the colours of the... metro-bow?

![](/img/metro.css.colours.png)

###Controls
There is a pivot control as well as a tile layout system with tilt on mouse-press (although only in Webkit browsers for now)

##Whats next?

* We will (eventually) migrate code52 to using metro.css - a decent whack of styles came from code52 as it was!
* There are still a stack of tasks on the [trello board](https://trello.com/board/metro-css/4f2fd841a5146fa91fbff127) before we'd consider this a "done" project - I'd personally love to see the gh-pages template knocked up so more projects can use that (rather than the makeshift template we created that [a few are starting to use](http://signalr.net/))

##Contributors
The turn out for metro.css has been - to say the least - disappointing. While it had a modest 36 votes, just three outside of the Code52 team turned up. We've had many declare that we're shooting ourselves in the foot for *restricting* ourselves to .NET or just Windows projects. This was the first project that had no platform restrictions... yet few showed up. As our first venture outside the .NET sandbox it was a bit discouraging, and we are looking at ways to get others involved beyond the suggestion step.

##Download
You can view the documentation and grab all the relevant artifacts over at the [project page](http://code52.org/metro.css/)

##Weekly Fun stats
![](https://chart.googleapis.com/chart?chs=800x300&chds=-1,24,-1,7,0,7&chf=bg,s,efefef&chd=t:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23|0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7|0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,5,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,4,2,1,2,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,2,0,3,0,0,0,7,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&chxt=x,y&chm=o,333333,1,1.0,25.0&chxl=0:||12am|1|2|3|4|5|6|7|8|9|10|11|12pm|1|2|3|4|5|6|7|8|9|10|11||1:||Sun|Mon|Tue|Wed|Thr|Fri|Sat|&cht=s)

##Cool Stuff
As we alluded to earlier, a lot of the metro.css pack was built on top of ideas from work done on the new look [code 52](http://code52.org) web site that [@shiftkey](http://twitter.com/shiftkey) and [@aeoth](http://twitter.com/aeoth) worked hard on while [@tobin](http://twitter.com/aeoth) was on a beach - take a look and give us some feedback!

The development of metro.css so far has also given the opportunity to give a lot of feedback into our previous project [Pretzel](https://github.com/Code52/pretzel) as we used it to generate test sites.

Give both a shot together, check out the pages that get generated, and how the static site generator works, and what was built into metro.css and we hope some of you will like contributing once you see how easy it is!