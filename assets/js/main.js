$(document).ready(function () {
    // Initiate twitter
    $('.tweet').twittie({
        username: 'sonnyt',
        count: 1,
        hideReplies: true
    });

    // Get Themeforest count
    $.getJSON('http://marketplace.envato.com/api/edge/user-items-by-site:sonnyt.json', function (data) {
        var count = data['user-items-by-site'][0].items;

        $('#themeforest em').html(count);
    });

    // Get GitHub repo count
    $.getJSON('https://api.github.com/users/sonnyt/repos?callback=?', function (data) {
        var count = data['data'].length;

        $('#github em').html(count);
    });
});