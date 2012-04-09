--- 
layout: post
permalink: /say-wat.html
date: 2012-04-09 23:59
title: "Say Wat? Recap"
author: "@shiftkey"
comments: true
---

With the long weekend due to the Easter break, this has been an interesting and relaxed week for all involved.

As I need to dive into preparing the next project, here's a bullet list version of the recap. Or you can just go and play around with the site: [sayw.at](http://sayw.at).

### What we acheived

 - **Learning how a good NodeJS application is structured** - much love to [Chris Sainty](http://twitter.com/csainty) for giving us some guidance on this. While initial demos show off cool things like building chat servers, going from that to separating application configuration and logic.

 - **MongoDB** - we had a relatively simple schema to represent our data (question, answers and users) and MongoDB was an ubiquitous option for us to test locally or use in live environments. With the availability of [hosted databases](http://mongohq.com) and support on many cloud providers (even [Azure](http://www.mongodb.org/display/DOCS/MongoDB+on+Azure)) this was an easy choice.

 - **Deployment** - we can take the one codebase and deploy it today to Heroku and AppHarbor (as long as they have a MongoDB addin configured too). We also learned about how node_modules should be treated in [source control](http://www.mikealrogers.com/posts/nodemodules-in-git.html) and were bitten by overnight releases of packages breaking pull requests.

 - **Testing** - we added JSHint (static analysis tool for Javascript syntax) and Mocha (unit testing framework) and learned how easy it was to setup [Travis-CI](http://travis-ci.org) to build the project directly from the Github repository.

### What's next?

As this was a relaxed weekend, there's still a [number of tasks](https://trello.com/board/saywat/4f7974869bf90505711b92f8) to be picked off before the client (being @shiftkey) is happy with a V1 release. We've got a wiki which should help with [getting started](https://github.com/Code52/saywat/wiki/Getting-Started) on setting up your project.