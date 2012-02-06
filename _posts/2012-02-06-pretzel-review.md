--- 
layout: post
permalink: /pretzel-review.html
date: 2012-02-06 23:59
title: "Pretzel: Recap"
author: "@aeoth, @shiftkey and @tobin"
comments: true
---

Things were a bit quiet in the chatroom with [@tobin](http://twitter.com/tobin) taking a well-deserved holiday, but we've made a lot of progress on Pretzel - our site generation tool using .NET.

## Current Features

How far did we get this week?

You can setup a new website using these three steps.

![](/img/pretzel-console.png) 

This provides the demo site we've configured to help get people started experimenting - including images, styles and a sample post.

![](/img/pretzel-demosite.png) 

You can then edit the files in the folder and see the site regenerate

![](/img/pretzel-console-2.png) 

![](/img/pretzel-edit.png) 

If you want to understand more of how this tool works, have a read of the [Jekyll wiki](https://github.com/mojombo/jekyll/wiki) - this will help understand the concepts that Jekyll uses to differentiate between pages and posts, and how to configure your sites - this should help answer any initial questions users have about getting started with your own websites. 

Some other features on top of the site generation underway:

 * Wordpress Importing has begun - we'll update the documentation as soon as that is officially ready
 * LESS compilation and JS minification within the 'bake' step.
 * Razor template support - this is not as far along as our Liquid support, but is an excellent experiment with plugging in other templating engines.
 
## More Features

As we get time, these features are also planned:

 * Liquid extensions - including a decent set of extensions for users to integrate into their themes
 * Refining the default project site to be a bit more featureful
 * The ideas around mixing static and dynamic content (one big idea was to leverage AppHarbor to support this) didn't get off the ground.

##  -  Weekly Fun stats

There were 13 contributors this week - some new faces and some familiar ones.

The [punch card graph](https://github.com/Code52/pretzel/graphs/punch_card) from GitHub shows how busy we were across the week.

<img src="https://chart.googleapis.com/chart?chs=800x300&amp;chds=-1,24,-1,7,0,9&amp;chf=bg,s,efefef&amp;chd=t:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23|0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7|0,0,0,0,0,0,0,0,0,0,1,1,2,1,2,0,0,0,1,0,0,1,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,5,5,9,1,0,1,1,0,0,0,1,0,0,0,0,1,1,2,3,0,1,3,1,1,3,5,2,0,2,1,0,1,0,0,0,0,3,2,0,1,0,1,0,4,2,5,2,4,5,5,8,2,0,0,0,0,0,0,0,4,5,0,0,0,0,1,1,0,2,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,1,0,1,3,0,1,0,0,0,0,0,0,1,1,0,0,1,2,0,0,1,1,0,1,3,3,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&amp;chxt=x,y&amp;chm=o,333333,1,1.0,25.0&amp;chxl=0:||12am|1|2|3|4|5|6|7|8|9|10|11|12pm|1|2|3|4|5|6|7|8|9|10|11||1:||Sun|Mon|Tue|Wed|Thr|Fri|Sat|&amp;cht=s">


## What's Next?

The post for the next idea will be up shortly - we've been discussing in the chatroom how to tackle this idea, so stay tuned.