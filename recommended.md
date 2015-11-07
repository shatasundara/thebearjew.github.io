---
layout: page
title: Recommended
permalink: recommended/
---
{% for category in site.data.recommendations %}
---

## {{ category.title }}  
  {% for item in category.list %}
{% if item.image %}
<a href="{{ item.url }}"><img id="about-profile" src="{{ site.images_path}}recommendations/{{ item.image }}" alt="{{ item.name }} Image"></a>

#### {{ item.name }}
{% else %}
#### [{{ item.name }}]({{ item.url }})
{% endif%}

{{ item.description }}
<br>
  {% endfor %}
{% endfor %}
