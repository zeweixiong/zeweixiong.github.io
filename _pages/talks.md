---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---

<style>
.btn{
    margin-bottom:5px;
    padding-top:1px;
    padding-bottom:1px;
    padding-left:15px;
    padding-right:15px;
}
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style>

{% for talks in site.data.talks %}
<div class="jumbotron">
### Invited talks
  <ol style="overflow: hidden">
    {% for talk in talks.talk_invited %}
      <li>{{ talk }}</li>
    {% endfor %}
  </ol>
</div>

<div class="jumbotron">
### Regular talks
  <ol style="overflow: hidden">
    {% for talk in talks.talk_regular %}
      <li>{{ talk }}</li>
    {% endfor %}
  </ol>
</div>
{% endfor %}
