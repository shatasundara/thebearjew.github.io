---
layout: page
title: Recommended
permalink: recommended/
---
Some suggestions on great reads, listens, and uses - from me to you. These are the things I love and I enjoy sharing.

Feel free to pass some of these along - <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://jry.io/recommended" data-via="jryio">Tweet</a> 

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");</script>

{% for category in site.data.recommendations %}
---

## {{ category.title }}  
  {% for item in category.list %}
{% if item.image %}
<a href="{{ item.url }}"><img id="about-profile" src="{{ site.images_path}}recommendations/{{ item.image }}" alt="{{ item.name }} Image"></a>

#### {{ item.name }} {% if item.author %}by {{ item.author }}{% endif %}
{% else %}
#### [{{ item.name }} {% if item.author %}by {{ item.author }}{% endif %}]({{ item.url }})
{% endif%}

{{ item.description }}
<br>
  {% endfor %}
{% endfor %}
