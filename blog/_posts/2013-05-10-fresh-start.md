---
layout: post
title: "Fresh Start"
date: May. 10, 2013
image: false
description: "Jekyll site built using Compass/Sass and jQuery hosted in Github Pages."
---

Finally, I got over my bad habit of procrastinating and updated my site. It's been forever since I touched it; mainly because I've been super busy working on different projects.

This new joint, is built using [Jekyll](https://github.com/mojombo/jekyll "Jekyll") and hosted using [GitHub Pages](http://pages.github.com/ "GitHub Pages"). So no more transferring files using FTP client. Source code is available to the public, so feel free to fork or contribute. If you decide to fork it, code is very easy to customize and mostly everything is declared in `_config.yml`. Things such as, title, description and social media username slugs.

To ease the process of creating a new post, I used [Rake](http://rake.rubyforge.org/ "RAKE -- Ruby Make") to handle this task. Rake file is very specific and probably won't be suitable for all. So I suggest either modifying it or completely ignoring it. Rake also requires few gems to execute successfully without any errors. So make sure you run `gem install` to assure that everything is in it's place.

On the front end of things, I used [jQuery](http://jquery.com/ "jQuery") to fetch my numbers from GitHub and Themeforest. Also, I use [SASS](http://sass-lang.com/ "Sass") syntax in addition to [Compass](http://compass-style.org/ "Compass") to create the Stylesheet. For convince source code includes `config.rb` file, which can be imported into Codekit or any other Compass compatible stylesheet compiler and it will automatically set all the properties.