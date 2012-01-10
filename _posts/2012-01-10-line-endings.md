---
layout: post
title: Line Endings
date: 2012-01-10
---

We're still learning Git and frankly it shows. We've hit an issue that can be best solved by copying a [wiki article](https://github.com/NancyFx/Nancy/wiki/Make-sure-line-endings-doesn%27t-bite-you-%28or-us%29) from [NancyFx](http://nancyfx.org/) nearly verbatim

>##Make sure line endings doesn't bite you (or us)
###All good things must come to an end..
> Before you begin working with <strike>Nancy</strike>Code52, be sure to set your AutoCRLF option to false. This tells your git client how it should treat line-endings in your local copy of a repository and prevents you from ending up with Git informing you that every single file have changes in it, when you are pretty damn sure you never touched any of them. Do yourself (and us - we don't want your screwed up line ending commits if we can avoid it!) a favor and make sure this is configured correctly.

> To set AutoCRLF for just the <strike>Nancy</strike>Code52 repository, make sure you are in the correct folder and execute

> `git config core.autocrlf false`

> To make it the default setting for all repositories execute (this might very well introduce the issue in other repositories, if they rely on another setting)

>`git config --global core.autocrlf false`

