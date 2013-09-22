---
layout: resource
title: "jQuery downCount - TimeZone Sensative Countdown Plugin"
date: Sep. 20, 2013
category: resources
featured: false
type: resource
tags:
- freebie
- resources
- countdown
image: downcount.jpg
summary: false
description: "jQuery downCount - TimeZone Sensative Countdown Plugin"
demo: http://sonnyt.com/downCount
github: https://github.com/sonnyt/downCount
download: https://github.com/sonnyt/downCount/tags
---

jQuery countdown plugin that accounts for timezone. Plugin requires you to set your UTC offset. You can find your UTC offset [here](http://www.timeanddate.com/library/abbreviations/timezones/). Currently the offset is set to NYC -4 UTC.

#Features

- Timezone sensative
- Callback function

#Usage

Initlize just like any other plugin.

{% highlight javascript %}
$('.countdown').downCount({
    date: '08/27/2013 12:00:00',
    offset: -5
}, function () {
    alert('WOOT WOOT, done!');
});
{% endhighlight %}

[Read more on GitHub...](https://github.com/sonnyt/downCount)