---
layout: post
title: "Proper Truncating"
date: Mar. 25, 2014
description: "PHP function that truncates a block of text without breaking a word."
category: development
---
Here is a useful PHP function that truncates a block of text without breaking a word. This is useful when creating an excerpt text and making sure that words are not cut off.

<!--break-->

{% highlight php %}
<?php
    function truncate($text, $limit = 150, $elips = '...')
    {
        $text = html_entity_decode($text, ENT_COMPAT | ENT_HTML401, 'UTF-8');

        $len = strlen($text);

        if ($len > $limit) {
            preg_match('/(.{' . $limit . '}.*?)\b/', $text, $matches);

            $text = rtrim($matches[1]) . $elips;
        }

        return htmlentities($text, ENT_COMPAT | ENT_HTML401, 'UTF-8');
    }
?>
{% endhighlight %}

When calling the function, you can pass a word limit, the default is `150`. Also, function accepts custom ellipses, default is `...`.
