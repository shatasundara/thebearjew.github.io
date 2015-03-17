---
layout: default
title: Blog            
description: My writings about tech, social bullshit, and developing
---
<section id="posts">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-1">
        <ul>
          {% for post in site.posts %}
          <li>
            <a href="{{ post.url }}"><h4 class="post-title">{{ post.title }}</h4></a>
            <small>{{ post.date | date: "%B %-d, %Y" }}</small>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
