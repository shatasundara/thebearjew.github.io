---
layout: intro
title: Home
---
# Hi, I'm Jacob

{% include navbar-intro.html %}

<br>

I'm a student, and a programmer - but not a student-programer.

I love to make things with code. Right now I'm working with Python and JavaScript (Node, SocketIO) - though I still love iOS and *[[Objective-C alloc] init]*. 

I prefer simple, thoughful, code and designs where possible - never make it too cluttered. 

--- 

### Latest Post

{% assign post = site.posts.first %}
{% assign content = post.content | remove: '<p>' | remove: "</p>" %}

#### [{{ post.title | truncate: 80 }}]({{ post.url }})

> <small>{{ post.excerpt }}</small>