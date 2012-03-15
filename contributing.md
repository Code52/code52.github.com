---
layout: post
title: Contributing to Code52 projects
---

##Getting ready to contribute
***For a detailed list of getting started links, head to the [Code52 wiki](https://github.com/Code52/code52.github.com/wiki)***

For all of the Code52 projects, we're using Git for our version control, and [GitHub](https://github.com/code52) as the central repo.

Why Git and GitHub? Git is one of - if not the - leading *distributed* version control systems. All DVCS are faster than the centralised systems like SVN or CVS.  We do understand that Git isn't as easy to grok - particularly on Windows - as other tools such as Mercurial (Hg). We feel that GitHub is better suited than other hosted source platforms, so we're persevering with it. There are a fair [few introductions to git](http://book.git-scm.com/), but feel free to ask questions on how to use it in [Jabbr](http://jabbr.net/#/rooms/code52).

Why GitHub? The community around GitHub, including the fantastic service itself and the way they're embracing and encouraging open source software makes it ideal to work with for the Code52 team - remember, we're trying to promote OSS!

If you're on Windows, check out GitHub's excellent guide for setting up [Git on Windows](http://help.github.com/win-set-up-git/)  

Once you've got Git setup, make sure you [fix your line endings](http://code52.org/line-endings.html) by setting `autocrlf` to `false`.  You can do this on a per project basis by going into a project directory, and typing

`git config core.autocrlf false`

or at a global level and doing

`git config --global core.autocrlf false`

##How do I contribute?
For the Code52 projects, we're adopting what is often referred to as "GitHub Flow". This doesn't exclusively apply to GitHub or even Git, but this is the example we're giving.

> Note, this is different to "Git Flow", and although many of the principles are the same, it's much much simplier.

###Step 1: Fork or branch the repo
![][1]

At the top of every GitHub project is the magical fork button. If you don't have access to the repo, fork it to copy it over to your account. Once you fork it, you have full administrative privledges over your fork, so you can commit away.

If you do have write access to the repo, just skip to step 2.

![][2]

###Step 2: Pick an issue, any issue. Be an issue!
Normally you'd easily be able to make a fork, branch and commit up changes, but in Code52 projects we're moving very quickly and can quickly pick up people. It's a good idea to 'stake your claim' on a bug or feature to fix up so that two people aren't working on the same thing.  

![][3]

Go over to the original project's issue tab, and pick something that you'd like to work on. Don't see it there? Create an issue. If you can, assign the issue to yourself or leave a comment on the issue saying "I'll do this" - it needs to be explicitly stated, as just reporting an issue (be it a bug or feature) doesn't really let people know what you're doing.

###Step 3: Create a branch and make some changes
Create a somewhat descriptive branch name on *your* fork, switch to it, make some changes. A descriptive name helps let us know what you are working on. Better yet, if an issue is created you can reference it *in your commit notes* by having "#IssueNumber" - ie,  

> \#1 - I added more awesome in

If you do that, GitHub automatically creates a note in the issue tracker that you've referenced the issue, right down to the specific commit!

![][4]

To create branches in git,

	git branch MyBranchName
	git checkout MyBranchName
	
###Step 4:  Send a pull request
It doesn't matter whether you've got full access to a repo or forked and have your own branch - you can pull request from your fork or from your branch back into the `master` branch.  Even if you're the project "owner/maintainer", if there are others on the project, send a pull request and let somebody else accept/review it.

Why a pull request? One, that gives the project maintainer notification that something has been done, and two, GitHub's pull request interface is a fantastic way to do code reviews.

The pull request button is next to the fork button, up the top of a project.

![][5]

Neat so far, right? It gets better. The pull request will notify the project maintainers, and present them with an *awesome* magical button.

![][6]

Oh sure, there is extra information about the pull request - such as all the commits involved and full discussion capabilities, but at the end of the day, the auto-merge button makes pull requests and GitHub flow *trivial* to do.

 [1]: img/githubflow_1.png
 [2]: img/githubflow_2.png
 [3]: img/githubflow_3.png
 [4]: img/githubflow_4.png
 [5]: img/githubflow_5.png
 [6]: img/githubflow_6.png
 [7]: img/githubflow_7.png