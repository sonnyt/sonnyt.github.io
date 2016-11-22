---
layout: post
title: "Merge JavaScript Objects"
date: Jul. 3, 2015
image: false
description: "Merge multiple JavaScript objects."
---

{% highlight javascript %}
function merge(mainObject) {
    var i = 1;
    var len = arguments.length;

    for (; i < len; i++) {
        for (var key in arguments[i]){
            mainObject[key] = arguments[i][key];
        }
    }

    return mainObject
}
{% endhighlight %}

Example:
{% highlight javascript %}
var contact = merge({name: 'John'}, {city: 'Brooklyn'}, {State: 'New York'});
{% endhighlight %}
