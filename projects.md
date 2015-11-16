---
layout: default
title: Projects
permalink: projects/
is_navbar: true
---

## Projects
{% assign projects_sorted = (site.data.projects) %}
{% for project in projects_sorted %}
[{{ project.name }}]({{ project.url }}) - <small>{{ project.stack }}</small><div class="post-data-elements"><small>{{ project.date | date: "%B %-d, %Y" }}</small></div>

> <small>{{ project.description }}</small>
{% endfor %}