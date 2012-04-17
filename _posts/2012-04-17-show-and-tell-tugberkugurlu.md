--- 
layout: post
permalink: /show-and-tell/1/generic-repository-pattern.html
date: 2012-04-17 23:00
title: "Show and Tell #1 - Generic Repository Pattern series"
author: "@shiftkey"
comments: true
---

## Introduction

When Tugberk sent me the link last night to this series, my curiousity was piqued. The generic repository pattern is something we had used for previous Code52 projects - which had also used Entity Framework as the backing store.

For those who are not familiar with it, a *repository* is typically defined as (from [Edward Hieatt and Rob Mee](http://martinfowler.com/eaaCatalog/repository.html)): a component which "**mediates between the domain and data mapping layers using a collection-like interface for accessing domain objects.**"

Why use the repository pattern?

 - decouple the application logic from the data access logic 
 - test the application logic in isolation - swap out the database for an in-memory collections of data.

 Anyway, before I go spoiling the content, Tugberk has written a series on this:

 - in the [first part](http://www.tugberkugurlu.com/archive/generic-repository-pattern-entity-framework-asp-net-mvc-and-unit-testing-triangle), he discusses the pattern and why you should care.
 - in the [second part](http://www.tugberkugurlu.com/archive/how-to-work-with-generic-repositories-on-asp-net-mvc-and-unit-testing-them-by-mocking), he explains how you can use this with Entity Framework and MVC3.
 - and to finish, he's [released](http://www.tugberkugurlu.com/archive/entity-framework-dbcontext-generic-repository-implementation-is-now-on-nuget-and-github) NuGet packages for bringing generic repositories into your apps (and the source is on GitHub). 

Lots of detail, lots of code samples. I hope you enjoy it.

## About the Author

Tugberk Ugurlu hails from Turkey and juggles university studies with his work as a Programmer and Internet Sales Director. He blogs at [www.tugberkugurlu.com](http://www.tugberkugurlu.com/) and is [@tourismgeek](http://twitter.com/tourismgeek) on Twitter.

## Addendum

 - If you want to learn more on the repository pattern, Jon Galloway and Jesse Liberty did a screencast on **[Building a Repository using TDD](http://channel9.msdn.com/Series/The-Full-Stack/The-Full-Stack-Part-3-Building-a-Repository-using-TDD)** for their video series "The Full Stack". Check it out.
