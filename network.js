// Reusable network visualization
// Ishan Saksena
// INFO474, Spring 2017

var network = function() {
    // Defaults
    var width = 960,
    height = 500,
    margin = {
        top: 10,
        bottom: 40,
        left: 30,
        right: 30,
    };

    var viz = function(selection) {
        console.log("Returning closure")
        var svg = d3.select("body");
    }

    // Getter/setter methods to change default values
    viz.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return viz;
    };

    viz.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return viz;
    };

    return viz;
}