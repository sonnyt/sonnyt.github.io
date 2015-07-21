---
layout: post
title: "Angular.js Number Range"
date: Jul. 3, 2015
image: false
description: "Angular.js simple range between numbers filter"
---

{% highlight javascript %}
var myApp = angular.module('myApp', []);

myApp.filter('range', function() {
    return function(input, start, stop, step) {
        var length, i;

        if (!stop) {
            stop = start || 0;
            start = 0;
        }

        step = step || 1;

        length = Math.max(Math.ceil((stop - start) / step), 0);
        i = 0;

        for (; i < length; i++, start += step) {
            input.push(start);
        }

        return input;
    };
});
{% endhighlight %}
