---
title: "Software"
layout: gridlay
sitemap: false
permalink: /software/
---

## Software

{% for software in site.data.softwares %}

<div class="jumbotron">
<div class="row">
<div class="col-sm-8 col-xs-12">
  <h4><a href="{{ software.url }}">{{ software.name }}</a></h4>
  <h6><i>{{ software.info }}</i></h6>
  {{ software.about }}
</div>
<div class="col-sm-4">
  <h4><br></h4>
  <a href="{{ software.url }}">
  <img src="{{ software.photo }}" width="100%" style="max-width:250px"/>
  </a>
</div>
</div>
</div>
{% endfor %}
