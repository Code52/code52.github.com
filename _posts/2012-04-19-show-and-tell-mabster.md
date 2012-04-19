--- 
layout: post
permalink: /show-and-tell/3/task-parallel-library.html
date: 2012-04-19 23:00
title: "Show and Tell #3 - Building Budgie with the Task Parallel Library (TPL)"
author: "@shiftkey"
comments: true
---

## Introduction

For those of you who aren't familiar with it, [Matt Hamilton](http://twitter.com/mabster) wrote a Twitter API library over a few nights last week as an experiment to better understand the Task Parallel Library.

He's named it Budgie - you can [read up about it](http://matthamilton.net/budgie), browse the [source code](http://bitbucket.org/mabster/budgie), install the [NuGet packages](http://nuget.org/packages/Budgie) or try out his Twitter client [Halfwit](http://madprops.org/halfwit/) which uses it.

I asked Matt if he was interested in discussing why he decided to use the TPL for his project and what was cool about it.

## The problem with asynchronous code

When thinking about what [Budgie's](http://matthamilton.net/budgie) surface API was going to look like, I knew one thing: it would be asynchronous only. There would be no methods like `GetHomeTimeline()` that blocked and waited for Twitter to respond.

There are any number of ways to write asynchronous APIs. The one I've been most comfortable with to date (used in TweetSharp, another Twitter library that heavily informed Budgie) is to ask for a callback as a parameter to your method, and call that when your asynchronous task is done. For example:

    public void DoStuff(string text, Action<DoStuffResult> callback)
    {
        // step 1: do stuff with text asynchronously
        DoStuffResult result = ...;

        // step 2: call the callback with the result
        callback(DoStuffResult);
    }

This technique works really well, but with the advent of C# 5 and the new "async" and "await" keywords, a new approach became the obvious choice: using the Task Parallel Library.

The idea is simply to return a "hot" `Task` (that is, a task that is already running) from your method:

    public Task<DoStuffResult> DoStuff(string text)
    {
        return Task.Factory.StartNew(t => ..., text);
    }

Note that the method above returns a `Task<T>`, which is a special kind of `Task` that returns a result. If your method doesn't need to return a value (like a void method) you would return a non-generic `Task` object instead.

The calling code can then decide what to do with that task. They might decide to block and wait for it to finish:

    DoStuffResult result = DoStuff("hello world").Result;

Or they might use a continuation:

    DoStuff("hello world").ContinueWith(result => { ... });

Or, in C# 5, they might use the non-blocking "await" keyword:

    DoStuffResult result = await DoStuff("hello world");

Using the Task Parallel Library gives the caller some flexibility in that regard, and the fact that it integrates so seamlessly into the C# 5 syntax made it an obvious choice.

## Using the TPL with WebRequest

I decided to use good ol' `System.Net.WebRequest` when making my calls to Twitter, partly because it offered fine-grained control over the request and partly because I was doing "Google Driven Development" and a lot of code samples out there use it.

`WebRequest` offers an async API in the form of its `BeginRequest` and `EndRequest` methods, and as it turns out, the TPL gives us a really easy way to turn those calls into a `Task<WebResponse>`:

    return Task.Factory.FromAsync<WebResponse>(request.BeginGetResponse, request.EndGetResponse, null);

That returns a running Task which is performing the request and will return the response in the `Result` property.

Budgie, however, doesn't use it. Why? Because I wanted all HTTP requests in Budgie to honour a Timeout property, and WebRequest doesn't honour its own Timeout property unless you use the synchronous `GetResponse` method. So my code actually looks like this:

    return Task.Factory.StartNew(() => request.GetResponse());

It could be argued that that's actually _more_ readable. :)

From there I can use a continuation (since Budgie is written using C# 4 and doesn't make use of the "await" keyword) to take action when the task completes:

    return requestTask.ContinueWith(t =>
        {
            if (t.StatusCode != System.Net.HttpStatusCode.OK) return null;

            Foo result = new Foo();
            
            // populate result by deserializing the JSON returned in the response

            return result;
        });

It's worth noting that `ContinueWith` in this case is returning a `Task<Foo>`, since I've passed it a `Func<Foo>` to execute. The fact that I'm "continuing" from a `Task<WebResponse>` doesn't mean I have to return that type.

All in all, it's pretty easy! Easier still had I written this code with C# 5, but I wanted to be able to build this from my home PC which doesn't have .NET 4.5 or the Async CTP installed.

## Wrapping Up

Using the TPL to create an asynchronous API is the logical choice in modern .NET development, and I wouldn't have done anything different in Budgie. I'm looking forward to the final release of VS11 and .NET 4.5, at which point I'll refactor the code to make use of the "await" keyword, but for now it's good to know that you can do this in a future-proof way with the current tools.
