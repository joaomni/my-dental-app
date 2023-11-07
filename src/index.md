---
title: My first page
layout: base.njk
---

{% include "header.njk" %}
{% include "home.njk" %}
{% include "services.njk" %}
{% include "about.njk" %}
  <div class="c-count-card">
    {% for analytic in analytics -%}
    <div class="count-card">
      <h1>{{ analytic.amount }}+</h1>
      <p>{{ analytic.title }}</p>
    </div>
    {%- endfor %}
  </div>
{% include "more.njk" %}