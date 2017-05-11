# a3-software-design
INFO474 - Data visualization: Making reusable d3.js charts

This module helps you make network visualizations. These are excellent to show relationships between entities. An example is shown below. Code for the example can be found in the Example directory. 

IMAGE

## Prepping the Data 
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
>
**Protip** : There's two different types of arrays in the above object. While prepping your data, you can create the `node` and `links` arrays seperately and combine them with:  
```
var graph = {"nodes": nodes,"links": links};
```

## Building the visualization

### Setting dimensions

