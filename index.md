---
layout: intro
title: Home
---
# Hi, I'm Jacob

{% include navbar-intro.html %}

<br>

I'm a student, and a programmer - but not a student programer.

I love to make things with code. Right now I'm working with Python and JavaScript (Node, SocketIO) - though I still love iOS and *[[Objective-C alloc] init]*.

You'll find me planning or helping with hacker community events like hackathons or workshops throughout the year. I love going to developer meetups and talking to awesome people, but that usually means I need to pretend like I actually have a job... Want to change that? --> [Lets talk](mailto:{{ site.email }})

--- 

### Latest Post

{% assign post = site.posts.first %}
{% assign content = post.content | remove: '<p>' | remove: "</p>" %}

#### [{{ post.title | truncate: 80 }}]({{ post.url }})

> <small>{{ content | split: '<!-- more -->' | first }}</small>