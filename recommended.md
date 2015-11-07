---
layout: page
title: Recommended
permalink: recommended/
---
{% for category in site.data.recommendations %}
---

## {{ category.title }}  
  {% for item in category.list %}
<img id="about-profile" src="{{ site.images_path}}recommendations/{{ item.image }}" alt="{{ item.name }} Image">


#### [{{ item.name }}]({{ item.url}})

{{ item.description }}
<br>
  {% endfor %}
{% endfor %}
