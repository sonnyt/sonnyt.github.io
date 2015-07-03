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
    return function(arr, from, to) {
        var min = +from;
        var max = +to;
        var i = min;

        while (i < max + 1) {
            arr.push(i);
            
            i++;
        }
        
        return arr;
    };
});
{% endhighlight %}
