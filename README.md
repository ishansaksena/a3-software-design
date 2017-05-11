# a3-software-design
Ishan Saksena  
INFO474 - Data v isualization  
Spring 2017  
Making reusable d3.js charts    

This module helps you make network visualizations. These are excellent to show relationships between entities. It also allows users to drag and reconfigure the visualization. An example is shown below.  

![Graph Visualization](images/graphViz.gif "Network visualization")

## Preparing the Data 
There are two types of information encoded. The individual nodes present in the visualization and the relationships between them. You have to pass in a JSON object with a list of nodes and links as in the following: 

```
{
  "nodes": [
    {
      "id": 1,
      "name": "A"
    },
    {
      "id": 2,
      "name": "B"
    },
    {
      "id": 3,
      "name": "C"
    },
  ],
  
  "links": [
    {
      "source_id": 1,
      "target_id": 2
    },
    {
      "source_id": 1,
      "target_id": 5
    },
    {
      "source_id": 1,
      "target_id": 6
    },
  ]
}
```
`nodes` is the key to a list of nodes. The `name` field is rendered as text on the nodes. `links` is a list of pairs of nodes between which a link is to be drawn. The `source_id` and the `target_id` refer to the IDs of the nodes. 

> **Tip** : There's two different types of arrays in the above object. While prepping your data, you can create the `node` and `links` arrays seperately and combine them with:  
> ``` var graph = {"nodes": nodes,"links": links}; ```  
And to check if you prepped the data correctly, use:  
> ``` console.log(JSON.stringify(graph, null, 4));```

## Building the visualization

### Rendering the graph
```
// 1. Prepare your data as described above. 
// This code probably goes inside d3.json("data.json", function(error, graph) {});

// 2. Store a reference to the network closure. 
var net = network();

// 3. Set attributes for the visualization.
net.width(600).height(500);

// 4. Pass in the element to render the graph in and the data.
var chart = d3.select("#vis").data([graph]).call(net);

// 5. Update attributes
net.nodeFill("rgb(255, 0, 0)");

// 6. $$$
```

### Setting dimensions
In the following, the nodes refer the circles and links refer to the lines connecting them. You can set these attributes with `net.<dimension>(<value>);`

RGB values may be specified as `"#ff0000"` or `"rgb(255, 0, 0)"`
Pixel values may be specified as `960` or `"2px"`
The chart has the following attributes. The default values and the descriptions are shown next to the attribute names.   

- **`width`** = 960
> Width of the chart in pixels. 
- **`height`** = 500
> Height of the chart in pixels. 
- **`linkStroke`** = "#969696"
> Color of the links. Takes in an RGB value.
- **`linkStrokeWidth`** = '3px'
> Thickness of the links in pixels. 
- **`nodeRadius`** = 20
> Radius of the node circles in pixels. 
- **`nodeFill`** = "#d9d9d9"
> Color of the nodes, takes in an RGB value.
- **`nodeStroke`** = "#969696"
> Color of the border of the nodes as an RGB value.
- **`nodeStrokeWidth`** = "2px"
> Thickness of the border of the nodes in pixels.
- **`fontSize`** = '20px'
> Font size of the text on the nodes in pixels.
- **`textFill`** = "#4393c3"
> Color of the text on the nodes, as an RGB value. 