$(document).ready(function () {
    // Waypoint
    $('.main article').waypoint(function() {
        var article = $(this),
            time = article.index() % 3;

        setTimeout(function() {
            article.addClass('show')
        }, time * 100)

    }, {
        offset: '110%'
    });
});

console.log('No need to snoop around, the source code is available at https://github.com/sonnyt/sonnyt.github.io ;)');