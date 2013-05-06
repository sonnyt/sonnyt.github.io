$(document).ready(function () {
    // Initiate twitter
    $('.tweet').twittie({
        username: twitter_username,
        count: 1,
        hideReplies: true
    });

    // Get Themeforest count
    $.getJSON('http://marketplace.envato.com/api/edge/user-items-by-site:'+ themeforest_username +'.json', function (data) {
        var count = data['user-items-by-site'][0].items;

        $('#themeforest em').html(count);
    });

    // Get GitHub repo count
    $.getJSON('https://api.github.com/users/'+ github_username +'/repos?callback=?', function (data) {
        var count = data['data'].length;

        $('#github em').html(count);
    });
});