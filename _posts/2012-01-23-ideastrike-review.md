--- 
layout: post
permalink: /ideastrike-review.html
date: 2012-01-20 23:59
title: "Ideastrike: Recap"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

A bit of a chaotic weekend, but it finally came together and we have another project to unveil.

![](/img/week3-recap-logo.png)

[Ideastrike](http://github.com/Code52/Ideastrike) - which we will switch to once it has the features we require to replace our existing site - is a web application for suggesting, discussing, planning and executing project ideas.

## Curent Features

So what did we get done in a week?

 * The website uses [NancyFx](http://nancyfx.org/) - a super-duper-happy-path web framework running on ASP.NET (also runs in other places).
 * User authentication is done via [Janrain](http://www.janrain.com/products/engage) which means users don't need to create new accounts, and administrators don't need to manage accounts either.
 * Markdown support just about everywhere on the site. If you have space for more than a sentence, we've added Markdown support. And a preview mode too, using [Showdown](http://showdown.im).
 * [Twitter Bootstrap](http://twitter.github.com/bootstrap) has been used as the baseline for our site theme.
 * Image Uploading using the [jQuery File Upload](http://blueimp.github.com/jQuery-File-Upload/) plugin - attach files to an idea.
 * Oh, and running on AppHarbor [right now](http://ideastrike.apphb.com/). I wish I had more screenshots of the testing from earlier today - here's something more recent.

![](/img/week3-recap-main.png)

![](/img/week3-recap-idea.png)

**Note:** this is a non-production environment and will be treated as such by us in the short-term. Any ideas you want to keep for posterity should go on our [Uservoice](https://code52.uservoice.com/forums/143105-code-52) site, not on AppHarbor. We will let you know when that's ready to go.


## Fun stats

We had 14 separate contributors this week and 50 pull requests accepted - our busiest week so far.

The [punch card graph](https://github.com/Code52/Ideastrike/graphs/punch_card) over at GitHub this week also tells a story.

<img src="https://chart.googleapis.com/chart?chs=800x300&amp;chds=-1,24,-1,7,0,11&amp;chf=bg,s,efefef&amp;chd=t:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23|0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7|0,2,1,2,0,1,1,0,1,2,1,4,0,2,0,0,3,8,5,5,5,3,5,7,10,7,1,0,0,0,0,0,1,1,3,0,2,1,1,1,0,3,2,0,2,2,0,0,1,0,0,0,0,0,1,0,8,0,1,2,1,3,0,1,1,2,0,0,2,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,2,0,1,0,0,0,0,3,0,0,0,0,0,0,1,0,2,0,1,2,0,4,7,2,0,0,2,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,2,2,2,1,2,4,6,1,4,2,0,0,1,0,0,0,0,0,1,3,2,3,8,5,11,7,2,0,2,3,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&amp;chxt=x,y&amp;chm=o,333333,1,1.0,25.0&amp;chxl=0:||12am|1|2|3|4|5|6|7|8|9|10|11|12pm|1|2|3|4|5|6|7|8|9|10|11||1:||Sun|Mon|Tue|Wed|Thr|Fri|Sat|&amp;cht=s">


## What's Next?

While we're proud to have a working site going, we're not tying this one off just yet. We've got a number of things to add which are sitting on the [Trello board](https://trello.com/board/ideastrike/4f137b417201526045146b8a), just waiting, nay, begging for some love.

 * Github and Trello integration - we've started on the UI for this, but we want the activity feed to come alive as the idea evolves and progresses from concept to code.
 * API and Client libraries - so that app developers can integrate with Ideastrike directly.
 * A more dynamic web experience - we're using [Mustache.js](https://github.com/janl/mustache.js) already for the activity feed, and we've only scratched the surface of what you can do with JSON data and client-side templates.
 * Database improvements - using the shiny new EF 4.3 Migrations to update the schema and persist data.


## What can I do to help?

Interested in contributing?

 * Test out the site on [AppHarbor](http://ideastrike.apphb.com/) and log [issues](http://github.com/Code52/Ideastrike/issues) on Github. 
 * [Fork the code](http://code52.org/contributing.html) on GitHub and send us a pull request for something you'd like to add.
 * Suggest a feature on the [Trello](https://trello.com/board/ideastrike/4f137b417201526045146b8a) backlog.
 * Drop into the JabbR [chatroom](http://jabbr.net/#/rooms/code52) if you're not sure where to start. Of if you'd just like to chat.

And we'll wrap up this week's post with another meme that was unearthed this weekend in JabbR.

![](/img/why-dot-net.png)

Thanks to [@NickJosevski](http://twitter.com/nickjosevski) for some hilarity.