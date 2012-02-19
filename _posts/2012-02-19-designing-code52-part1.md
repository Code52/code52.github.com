---
layout: post
title: "Designing Code52: Part 1"
date: 2012-02-19 13:40:48 +11:00
comments: true
---

Code52 is an interesting mix of technologies that will always require something most developers are lacking: design. There has recently been the rise of the "devigner" - a developer who can do design, or even the other way around (particularly with web tech), and there are always exceptions to the case where somebody is equally good at design as they are at developing. Unfortunately - at least in the .NET world we've been looking at so far - this isn't the norm *yet*.

While this might sound like bragging (because some of our designs are nice), what we mean is "*design is hard when coming from the developer side*"  hard work and practice - just like any new programming technique - is all it requires.

Over the coming weeks we'll share what process we go through for design, as well as the inspirations and resources we draw on to improve our designs. 

Today, however, I wanted to share some of the tools - both digital and physical - that I use for designing Code52.

##Physical Media
Yes, I go "old school" for just about every design. We still live in a world where its easier to quickly sketch something by hand, then spend more time making it more accurate digitally

###Pens
The best investment for design sketching I've made is the set of [Sakura Pigma Micron](http://www.sakuraofamerica.com/Pen-Archival), size 005 (0.20mm tip) pens I have. The tiny pen tip allows for very fine drawing, and the lovely ink doesn't smudge. 

![](/img/designing_part_1/IMG_8245.jpg)

While $3-5 a pen might seem expensive, these suckers *last*. [Miguel Endara](http://vimeo.com/miguelendara) drew a piece of art composed of 3.5 million dots (a technique known as [http://en.wikipedia.org/wiki/Stippling](stippling))... with just one of these pens.

<iframe src="http://player.vimeo.com/video/33091687?title=0&amp;byline=0&amp;portrait=0" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

I don't *only* use Sakura pens - I also have a [Staedtler Mars Micro](http://www.staedtler.com.au/Mars_micro_au) mechanical pencil (which is "ok") and a [LAMY Logo fountain pen](http://www.lamy.com/eng/b2c/logo/006) with EF nib (which is awesome). Most people would just write with a fountain pen (which it *excels* at), but the broader tip (than the Sakura pens) and particular type of ink produce fantastic results.

![](/img/designing_part_1/IMG_8252.jpg)

###Paper
I use a mix of paper - three different notepads and a draughtsman table with some random A3 paper I've found. At the moment my wife and I are house sitting for friends, and we haven't moved the table so I can't grab a photo of that, but here are the three notepads.

![](/img/designing_part_1/IMG_8246.jpg)

From left to right, a hardback [Whitelines](http://whitelines.se/)  A5 notebook (grid ruled), a [Rhodia](http://rhodiapads.com) "#15" (same as the #16, but 300 pages instead of 90)  A5 (grid ruled) and an unruled A5 notebook I was gifted - it doesn't have a clear brand on it, so I can't provide more details.

![](/img/designing_part_1/IMG_8247.jpg)

I have also been considering a more "pocketable" A6 notepad to take everywhere with me - if you've got any suggestions, leave a comment below.


##Digital Media
###Hardware
While I'd love a Wacom Cintiq (if any philanthropists are listening!), I "make do" with the Wacom Bamboo I have - it's a few years old now and bottom of the range, but still a very nifty tool.

![](/img/designing_part_1/IMG_8250.jpg)

The tablet came in particular handy for [Samurai](http://code52.org/samurai-review.html)'s design, as we wanted to maintain a "hand drawn" look.

###Software
Adobe Illustrator and Photoshop - when it comes to vector and bitmap manipulation, there isn't much better. In Photoshop CS5, proper "painting" brushes were introduced which puts Corel's Painter to shame.


**Icons**  
For icon generation, we had some unpleasant results using Paint.NETs export, so we've moved to using Telegraphics (free!) [Photoshop ico exporter plugin](http://www.telegraphics.com.au/sw/product/ICOFormat) and combining with their (still free) [IcoBundle](http://www.telegraphics.com.au/sw/info/icobundle.html). This allows very fine tuning of resizing and what format.

Why is this needed? Well, Windows XP will crash and burn when you run any app with a "PNG ICO", requiring the much uglier (and larger) "BMP ICO".

The "work flow" for this:

* Resize each "size/layer" in Photoshop using *"Bicubic Sharper (best for reduction)"*
* Manually tweak a few pixels here and there the smaller it gets for legibility (Optional)
* Save as `imagesize.ico` (ie, `256.ico`, `64.ico`) - make sure its a square image - and select "Standard ICO" as the output format.
* Once all the sizes are exported, from a command line `icobundl.exe -o projectname.ico 256.ico 128.ico 64.ico`.

This gives ~200-500kB icons compared to PNG's that would be 20-60kB, but this is the only way to maintain compatibility (and good scaling) on Windows XP up. "Unfortunately", we're promoting every body join in and contribute, we can't discriminate against old OS versions!