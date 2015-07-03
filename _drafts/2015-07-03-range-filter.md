{% highlight javascript %}
var myApp = angular.module('myApp', []);

myApp.filter('range', function() {
    return function(arr, from, to) {
        var min = +from;
        var max = +to;
        var i = min;

        while (i < max + 1) {
            arr.push(i);
            
            i++;
        }
        
        return arr;
    };
});
{% endhighlight %}
