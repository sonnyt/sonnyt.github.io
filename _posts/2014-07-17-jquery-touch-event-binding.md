---
layout: post
title: "jQuery Touch Event Binding"
date: Jul. 17, 2014
image: false
description: false
---

While I was working on the jQuery prettySocial. One of the biggest hurdles I encountered was dynamically binding touch events to the DOM element. The problem was not actually the binding, but the fact that event was being called when user scrolling the page with their finger. There is an in depth [article](http://briangonzalez.org/posts/mouse-and-touch-events-done-right) about this by Brian G.

My solution to this was to capture the scroll event. Here is the snippet.

{% highlight javascript %}
    $('.link')
    .bind('touchstart', function (e) {
        if(e.originalEvent.touches.length > 1) {
            return;
        }

        $(this).data('touchWithoutScroll', true);
    })
    .bind('touchmove', function () {
        $(this).data('touchWithoutScroll', false);

        return;
    })
    .bind('touchend', function (e) {
        e.preventDefault();

        var touchWithoutScroll = $(this).data('touchWithoutScroll');

        if (e.originalEvent.touches.length > 1 || !touchWithoutScroll) {
            return;
        }

        // trigger your event
    });
{% endhighlight %}

I hope this helps.
