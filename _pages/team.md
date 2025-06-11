---
title: "Team"
layout: gridlay
sitemap: false
permalink: /team/
---

## Team

{% for member in site.data.team_members %}

<div class="jumbotron">
<div class="row">
<div class="col-sm-3">
  <img src="{{ member.photo }}" width="100%" style="max-width:250px"/>
</div>
<div class="col-sm-9 col-xs-12">
  <h4>{{ member.name }}</h4>
  <h6><i>{{ member.info }}</i></h6>
  Room: {{ member.office }}<br>
  Tel: {{ member.phone }}<br>
  Email: {{ member.email }}<br>
  {{ member.about }}
</div>
</div>
</div>
{% endfor %}
