---
layout: default
title: Posts
description: My writings about tech, social bullshit, and developing
---
<section id="posts">
  <div class="container">
    <div class="row text-center">
      <div class="col-lg-12">
        <ul>
          {% for post in site.posts limit:30 %}
          <li>
            <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
            <small>{{ post.date | date: "%B %-d, %Y" }}</small>
          </li>
          {% endfor %}
        </ul>
      </div
    </div>
  </div>
</section>
