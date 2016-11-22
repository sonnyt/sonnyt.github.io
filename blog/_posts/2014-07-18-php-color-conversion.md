---
layout: post
title: "PHP Color Conversion Functions"
date: Jul. 18, 2014
image: false
description: false
---

If you want to convert HEX decimal color to RGB here is a little handy function.

<!--break-->

{% highlight php %}
<?php
function hexToRgb ( $hex )
{
	$hex = str_replace( '#', '', $hex );

	if ( strlen( $hex ) == 3 ) {
		$r = hexdec( substr( $hex, 0, 1 ).substr( $hex, 0, 1 ) );
		$g = hexdec( substr( $hex, 1, 1 ).substr( $hex, 1, 1 ) );
		$b = hexdec( substr( $hex, 2, 1 ).substr( $hex, 2, 1 ) );
	} else {
		$r = hexdec( substr( $hex, 0, 2 ) );
		$g = hexdec( substr( $hex, 2, 2 ) );
		$b = hexdec( substr( $hex, 4, 2 ) );
	}

	$rgb = array( $r, $g, $b );

	return implode( ',', $rgb );
}
?>
{% endhighlight %}

If you want to convert RGB to HEX, use this one.

{% highlight php %}
<?php
function rgbToHex ( $rgb ) {
   $hex = '';

   $hex .= str_pad( dechex( $rgb[0] ), 2, '0', STR_PAD_LEFT );
   $hex .= str_pad( dechex( $rgb[1] ), 2, '0', STR_PAD_LEFT );
   $hex .= str_pad( dechex( $rgb[2] ), 2, '0', STR_PAD_LEFT );

   return '#' . $hex;
}
?>
{% endhighlight %}

Happy Coding!
