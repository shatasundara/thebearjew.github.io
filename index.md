---
layout: intro
title: Home
---
# Hi, I'm Jacob

{% include navbar-intro.html %}

<br>

I'm a student and a programmer.

I'm leading *dvcoders* this year, and I've helped out at a few hackathons at UC Berkeley. More about that [here](/about/)

Right now I'm working with Python and JavaScript (Node, SocketIO) for a slew of personal projects (still love iOS/[[Objective-C alloc] init] though). I prefer simple, thoughful, code and designs where possible - never make it too cluttered. 

--- 

### Latest Post

{% assign post = site.posts.first %}
{% assign postexcerpt = post.excerpt %}

> [{{ post.title | truncate: 80 }}]({{ post.url }}) 

> {{ postexcerpt }}