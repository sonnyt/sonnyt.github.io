$(document).ready(function () {
    $('.tweet').twittie({
        username: 'sonnyt',
        count: 1,
        hideReplies: true
    });

    

    // var template = $('#template').html();

});


$(window).load(function() {
    console.log("Time until everything loaded: ", Date.now()-timerStart);
});