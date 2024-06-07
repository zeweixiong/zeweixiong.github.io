---
title: "Blogs"
layout: pagelay
sitemap: false
permalink: /blogs/
---

<div class="jumbotron">
{% for post in site.posts %}
{{ post.date | date: "%b %d, %Y" }}: [{{ post.title }}]({{ site.url }}{{ site.baseurl }}{{ post.url }})
{% endfor %}
</div>
