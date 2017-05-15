---
layout: post
title: "Array From 0 to N"
date: May. 15, 2017
category: development
---

This short post intended to show how easy it is to create an array with 0 - n with ES6 version of JavaScript.

Old way:

```
var arr = [];
for(var i = 0; i <= 10; i++) {
	arr.push(i);
}

arr // [0,1,2,3,4,5,6,7,8,9,10];
```

New ES6 way:

```
let arr = [...Array(11).keys()];

arr // [0,1,2,3,4,5,6,7,8,9,10];
```

### What exactly is happening here?

First with `Array(n)` we are creating an empty array with N length, the value of each item in the list is `undefined`.

However, when we get the [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) of an array using `.keys()` method, we are getting list of indexes.

Lastly, since `.keys()` method returns an "Array Iterator", we are spreading out this result into a new array using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).

