--- 
layout: post
title: "Week 2: JibbR"
author: "@aeoth, @shiftkey and @tobin"
comments: true
date: 2012-01-16 10:00:00 PM 
---


As we are getting to the end of this iteration, it is time to take stock of what we have achieved.

## What went well

After being picked up by some influential tweeters, the Code52 room became the most popular room on JabbR - far surpassing our wildest expectations this far along. We also picked up some new contributors, and it was excellent to have contributors in different timezones.

So we currently have a collection of *sprockets* (components which interact with users in a chat room) and *announcers* (components which periodically execute tasks and notify the chat room when new things have occurred). Important features include:

 * **Calculator Bot** - too lazy to open calc.exe? ask the bot!
 * **Volunteer Sprocket** - (jokingly) assign work to a random person in the room
 * **Weather Sprocket** - find out the weather for a specific zip code (US only :( )
 * **Quiz Sprocket** - use a quiz to break up the quiet times
 * **GitHub Announcer** - track activity on a Github repo (and its forks)
 * **Twitter Announcer** - display tweets for a specific account
 * **UserVoice Announcer** - track activity in a UserVoice forum

We even have these ones sitting as pull requests:

 * **Bitbucket Announcer** - notify activity from a build server
 * **CruiseControl.Net Announcer** - notify activity from a build server
 * **TeamCity Announcer** - notify activity from a build server

These are run inside a console application with scheduling supported.

## What could be improved

We didn't quite get to the "feature complete" point this week, as I suspect we (ed: @shiftkey) were too ambitious with our goals.

We have a fork which is running on AppHarbor, but we encountered a few hurdles.

 * MEF and AppHarbor aren't playing nice - [Paul Stovell](http://twitter.com/paulstovell) suggested that it should be supported as FunnelWeb does it. To be investigated.
 * The website UI only has the basic functionality - to start and stop a bot - and lacks the ability to run specific sprockets or announcers.
 * The components require APIs to support start and stop behaviour.
 * The packages and website should be deployable 
 * [Paul](http://twitter.com/aeoth) just mentioned that [AWS Free Tier](http://aws.amazon.com/free/) now supports a micro Windows instance. Interesting...
 * Hubot scripting support is *almost* there, but the way that [scoped-http-client](https://github.com/technoweenie/node-scoped-http-client) handles and returns the http object and responses is proving to be a little tricky to implement in IronJs. This means that scripts that *don't* use 'http' currently work, but those that do won't work until we figure that one out.


 Here's a couple of screenshots of the website UI:

 ![](/img/week2-wrapup-dashboard.png)

 ![](/img/week2-wrapup-admin.png)

## Fun statistics

The [punch card graph](https://github.com/Code52/JibbR/graphs/punch_card) over at GitHub this month is very interesting.

![Code metrics](https://chart.googleapis.com/chart?chs=800x300&chds=-1,24,-1,7,0,26&chf=bg,s,efefef&chd=t:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23|0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7|1,0,0,0,0,1,0,0,4,0,0,1,2,0,0,7,9,1,0,2,10,0,0,3,0,0,0,0,0,1,0,0,0,4,0,2,0,1,0,0,3,0,0,0,1,2,2,4,2,0,0,0,1,0,0,1,26,1,0,1,1,2,0,0,2,1,2,5,3,8,18,6,1,0,2,3,0,0,17,11,0,0,3,4,3,0,2,2,0,0,0,0,4,7,1,1,2,0,0,0,0,0,0,0,0,2,1,2,0,5,3,3,0,2,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,0,0,2,0,0,2,10,4,3,1,0,0,0,0,2,2,3,1,7,1,0,0,0,0,0,2,2,1,2,0,3,2,1,0,2,2,7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&chxt=x,y&chm=o,333333,1,1.0,25.0&chxl=0:||12am|1|2|3|4|5|6|7|8|9|10|11|12pm|1|2|3|4|5|6|7|8|9|10|11||1:||Sun|Mon|Tue|Wed|Thr|Fri|Sat|&cht=s)

## What next?

The outstanding tasks are up on the new [Trello board](https://trello.com/board/jibbr/4f0f5e8ed8920290334bd12f). Feel free to add new idea to the backlog - or start work on one! Issues still go on our Github [Issues Page](https://github.com/code52/jibbr/issues) to discuss with the team. [Brendan](http://twitter.com/shiftkey) is speaking at a user group on Wednesday, so any discussion on these tasks may be delayed until he can get the code ready to merge upstream.

-- Code52 team
