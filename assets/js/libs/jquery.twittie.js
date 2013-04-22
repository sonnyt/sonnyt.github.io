/**
 * Tweetie: A simple Twitter feed plugin
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */

(function ($) {

    $.fn.twittie = function (options) {
        // Default settings
        var settings = $.extend({
            'username': null,
            'count': 10,
            'hideReplies': false
        }, options);

        // Check if username is set
        if (!settings.username) {
            $.error('Username is not defined.');
        }

        /**
         * Applies @reply, #hash and http links
         * @param  {String} tweet A single tweet
         * @return {String}       Fixed tweet
         */
        var link = function (tweet) {
            var parts = tweet.split(' ');
            var twit = '';

            for (var i = 0, len = parts.length; i < len; i++) {
                var text = parts[i];
                var link = "https://twitter.com/#!/";

                // Fix hashtag links
                if (text.indexOf('#') !== -1) {
                    text = '<a href="' + link + 'search/' + text.replace("#", "%23") + '" target="_blank">' + text + '</a>';
                }

                // Fix reply links
                if (text.indexOf('@') !== -1) {
                    text = '<a href="' + link + text.replace("@", "").replace(")", "") + '" target="_blank">' + text + '</a>';
                }

                // Fix regular http links
                if (text.indexOf('http://') !== -1) {
                    text = '<a href="' + text + '" target="_blank">' + text + '</a>';
                }

                twit += text + ' ';
            }

            return twit;
        };

        // Set loading
        this.html('<span>Loading...</span>');

        var url = 'https://api.twitter.com/1/statuses/user_timeline.json?callback=?';
        var that = this;

        // Fetch tweets
        $.getJSON(url, { screen_name: settings.username }, function (twt) {
            that.find('span').fadeOut('fast', function () {
                that.html('<ul></ul>');

                // If 'hideReplies' is set than filter the result
                if (settings.hideReplies) {
                    twt = twt.filter(function (tweet) { return tweet.in_reply_to_screen_name === null; });
                }

                for (var i = 0; i < settings.count; i++) {
                    if (twt[i]) {
                        var text = link(twt[i].text);

                        that.find('ul').append('<li>' + text + '</li>');
                    } else {
                        break;
                    }
                }
            });
        });
    };

})(jQuery);