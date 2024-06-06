---
title: "News"
layout: textlay
sitemap: false
permalink: /allnews.html
---

## News

<div class="jumbotron">

{% for article in site.data.news %}
<p><b>{{ article.date }}</b></p>

<p>{{ article.headline }}</p>
{% endfor %}

</div>
