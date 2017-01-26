---
layout: post
title: "Wordpress WP_Query custom post order"
date: Aug. 09, 2013
description: "Order Wordpress WP_Query posts by array list post IDs."
category: development
---
Recently, I had to build a Wordpress Admin widget area which enables a user to select, change order and save a list of posts. Selected post IDs are stored in an `array()` which can be found in the options table. It looks something like this:

{% highlight php %}
<?php
    $post_list = array( 123, 456, 321 );
?>
{% endhighlight %}

So when it comes to rending the posts in the array, I just create a new `WP_Query()`, like so:

{% highlight php %}
<?php
    $post_list = array( 123, 456, 321 );

    $args = array( 'post__in' => $post_list );

    $my_query = new WP_Query( $args );
?>
{% endhighlight %}

Wordpress automatically queries posts in a reverse chronological order (newest post first), or if set - by `orderby` value. However, what if I need to keep the queried posts in specific order listed in my `$post_list` array? This sort of condtion cannot be passed into `WP_Query()` as an argument, but it can be done after query is completed. After some messing around by creating loops and filtering the object, the best solution was to use the [usort()](http://php.net/manual/en/function.usort.php "usort - function") PHP function.

{% highlight php %}
<?php
    $post_list = array( 123, 456, 321 );

    $args = array( 'post__in' => $post_list );

    $my_query = new WP_Query( $args );

    usort( $my_query->posts, function( $a, $b ) use( $post_list )
    {
        $apos   = array_search( $a->ID, $post_list );
        $bpos   = array_search( $b->ID, $post_list );

        return ( $apos < $bpos ) ? -1 : 1;
    });
?>
{% endhighlight %}

And that's it.
