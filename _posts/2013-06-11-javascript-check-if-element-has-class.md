---
layout: post
title: "JavaScript Check If Element Has Class"
date: Jun. 11, 2013
category: blog
featured: false
type: text
tags:
- snippet
- resources
image: false
summary: false
description: "Check wether element contains a class, without using jQuery."
---
Here is a little snippet If you're trying to check wether element contains a class, without using jQuery.

{% highlight javascript %}
function hasClass(element, class) {
    return element.className && new RegExp("(^|\\s)" + class + "(\\s|$)").test(element.className);
}
{% endhighlight %}

This accounts for the fact that element might contain multiple class names separated by space.

You can also assign this function to an object prototype.

{% highlight javascript %}
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
{% endhighlight %}


And trigger it like this (very similar to jQuery's `.hasClass()` function):

{% highlight javascript %}
document.getElementById('MyDiv').hasClass('active');
{% endhighlight %}
