---
layout: post
title: "Angular.js Number Range"
date: Jul. 31, 2015
description: "Angular.js simple range between numbers filter"
category: development
---

Recently, while working on one of the projects at Onevest. I needed a dropdown list of years between 2015 and 1980. Instead of tryping each year out, I decided to create a tiny angular filter that iterates between two numbers.
<!--break-->
I extracted the `_.range()` function from [Underscore.js](http://underscorejs.org/#range) to make things easier.

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

It requires an initial array that you want to populate, start number, end number (stop) and a step.

> **start**, if omitted, defaults to *0*; **step** defaults to *1*. Returns a list of integers from **start** (inclusive) to **stop** (exclusive), incremented (or decremented) by **step**, exclusive. Note that ranges that **stop** before they **start** are considered to be zero-length instead of negative — if you'd like a negative range, use a negative **step**.

It's very simple to use:
{% highlight html %}
<select ng-model="year" ng-options="y as y for y in [] | range:2015:1980:-1"></select>
{% endhighlight %}
