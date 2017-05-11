// Example usage of reusable network visualization

$(function() {
    var width = 960, height = 500;
    var div = d3.select('#vis');
    
    // The SVG you want to render the graph in. 
    var svg = div.append('svg')
    .attr('width', width)
    .attr('height', height);
    
    d3.json("data.json", function(error, graph) {
        /* Prepare you data here. */
        
        if (error) throw error;
        
        // Pass in the element to render the graph in and the data.
        var net = network().width(600).height(500);
        var chart = d3.select("#vis").data([graph]).call(net);
        
        // Changing default values
        // Can also be done before calling net(svg, graph) to render the graph
        // Can be chained

        setTimeout(function(){ console.log("Updating"); 
            //graph = {"nodes": [graph.nodes[0]], "links": []};
            //chart = d3.select("#vis").data([graph]).call(net);
            net.nodeFill("rgb(255, 0, 0)").strength(0);
            net.linkStrokeWidth(10);
        }, 2000);
        
    });
});