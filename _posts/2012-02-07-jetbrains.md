---
layout: post
title: Big thanks to Jetbrains!
date: 2012-02-08
---

[![](/img/logo_resharper.png)](http://www.jetbrains.com/resharper/)

Big thanks to Jetbrains, who have come to the table and given us ringleaders a license for Resharper. While there is the eternal debate whether those using R# can program without it, for a project this size it's hard to function without it. Often we simply don't have time to go over everything while merging, and the highlighting of unreachable or broken code that R# provides alone is worth it. That's not even getting to the refactoring capabilities!

[![](/img/logo_teamcity.png)](http://www.jetbrains.com/teamcity/)

They've also granted us an open source license for Team City, which is operating on my home server, accessible via [ci.code52.org](http://ci.code52.org/). This will end up running and building all Code52 projects!

###Why is continuous integration important?
With CI (continuous integration), every time somebody commits/merges into one of the master branches, the project is built. If it has tests, the test are run. We know immediately when and who broke the build, and we get to test it in an environment outside the "developer" environment. 

If it's worth doing more that once, automate the heck out of it.

I already had the free ["Professional"](http://www.jetbrains.com/teamcity/buy/index.jsp) version installed for all my personal projects - it's the first (very important) step to making sure your applications don't just have a "works on this machine" badge.