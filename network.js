// Reusable network visualization
// Ishan Saksena
// INFO474, Spring 2017

var network = function() {
    // Defaults for graph
    var width = 960,
        height = 500;
    margin = {
        top: 10,
        bottom: 40,
        left: 30,
        right: 30,
    };

    // Defaults for elements in the graph
    var linkStroke = "#969696",
        linkStrokeWidth = '3px',
        nodeRadius = 20,
        nodeFill = "#d9d9d9",
        nodeStroke = "#969696",
        nodeStrokeWidth = "2px",
        fontSize = '20px',
        textFill = "#4393c3";

    // D3 Physics simulation
    var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2));

    var viz = function(svg, graph) {
        svg.attr('width', width).attr('height', height);
        
        simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }))
            .force("charge", d3.forceManyBody().strength(-400))
            .force("center", d3.forceCenter(width / 2, height / 2));

        // Height/width of the drawing area itself
        var chartHeight = height - margin.bottom - margin.top;
        var chartWidth = width - margin.left - margin.right;

        graph.links.forEach(function(d){
            d.source = d.source_id;    
            d.target = d.target_id;
        });


        var link = svg.append("g")
        .style("stroke", "#aaa")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line");

        var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 6)
        .call(d3.drag()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended));

        var label = svg.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("class", "label")
        .text(function(d) { return d.name; });

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        // Render links, nodes and labels
        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; })
                .attr('stroke', linkStroke)
                .attr('stroke-width', linkStrokeWidth);

            node
                .attr("r", nodeRadius)
                .style("fill", nodeFill)
                .style("stroke", nodeStroke)
                .style("stroke-width", nodeStrokeWidth)
                .attr("cx", function (d) { return d.x+6; })
                .attr("cy", function(d) { return d.y-6; });

            label
                .attr("x", function(d) { return d.x; })
                .attr("y", function (d) { return d.y; })
                .style("font-size", fontSize)
                .style("fill", textFill);
        }
    }

    // Interactions for dragging nodes
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
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

    viz.linkStroke = function(value) {
        if (!arguments.length) return linkStroke;
        linkStroke = value;
        return viz;
    };

    viz.linkStrokeWidth = function(value) {
        if (!arguments.length) return linkStrokeWidth;
        linkStrokeWidth = value;
        return viz;
    };

    viz.nodeRadius = function(value) {
        if (!arguments.length) return nodeRadius;
        nodeRadius = value;
        return viz;
    };

    viz.nodeFill = function(value) {
        if (!arguments.length) return nodeFill;
        nodeFill = value;
        return viz;
    };

    viz.nodeStroke = function(value) {
        if (!arguments.length) return nodeStroke;
        nodeStroke = value;
        return viz;
    };

    viz.nodeStrokeWidth = function(value) {
        if (!arguments.length) return nodeStrokeWidth;
        nodeStrokeWidth = value;
        return viz;
    };

    viz.fontSize = function(value) {
        if (!arguments.length) return fontSize;
        fontSize = value;
        return viz;
    };

    viz.textFill = function(value) {
        if (!arguments.length) return textFill;
        textFill = value;
        return viz;
    };

    return viz;
}