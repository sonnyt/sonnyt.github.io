---
layout: post
title: "jQuery Tweetie - Simple Twitter Feed Plugin"
date: Jun. 07, 2013
description: "jQuery Tweetie - Simple Twitter Feed Plugin."
category: news
---

jQuery Tweetie - Simple Twitter Feed Plugin.

#Features

- Easly template tweets using mustache-like syntax
- Format tweet timestamp using Linux/Unix `%d/%m/%Y` time formatting syntax
- Set tweet count
- Hide replies and only show your own tweets

#Usage

New Twitter API requires oAuth Token Key, so it's three step process.

## Step 1

First, you need a consumer key and secret keys. Get one from [dev.twitter.com/apps](https://dev.twitter.com/apps).

## Step 2

Edit `api/config.php` file and replace variables with your Consumer and oAuth Keys.

{% highlight php %}
<?php
    // Consumer Key
    define('CONSUMER_KEY', 'CONSUMER_KEY_HERE');
    define('CONSUMER_SECRET', 'CONSUMER_SECRET_HERE');

    // User Access Token
    define('ACCESS_TOKEN', 'ACCESS_TOKEN_HERE');
    define('ACCESS_SECRET', 'ACCESS_SECRET_HERE');
?>
{% endhighlight %}

## Step 3

Initlize just like any other plugin.

{% highlight javascript %}
    $('.tweet').twittie();
{% endhighlight %}

[Read more on GitHub...](https://github.com/sonnyt/Tweetie)
