// *** Day 12 ***
// https://adventofcode.com/2021/day/12

// input
var input = readTextFile("input.txt");

var edges = []
input.forEach(line => {
    var edge = line.match(/([A-Za-z]+)/g)    
    edges.push({node1: edge[0], node2: edge[1], node1Visited: 0, node2Visited: 0})    
});


// Part 1
var count = 0
findPaths(edges, "start", "")
console.log("Part 1: Number of paths: %d\n\n\n", count)


function findPaths(edges, from, path) {

    if (from == "end") {
        path += "-end"
        console.log(path)
        count++
        return
    }
    var fromNodes = findFromNodes(edges, from)

    fromNodes.forEach(e => {
        //console.log(e)
        if (e.node1 == from) {
            if (e.node2.toLowerCase() == e.node2 && path.includes(e.node2)) { // path already visited
            } else {
                findPaths(edges, e.node2, path + "-" + e.node1)
            }
        } else if (e.node2 == from) {
            if (e.node1.toLowerCase() == e.node1 && path.includes(e.node1)) { // path already visited
            } else {
                findPaths(edges, e.node1, path + "-" + e.node2)
            }           
        }        
    });    
}


// Part 2
const NodeType = {
    Big: "BIG",
    singleSmall: "singlesmall",
    multiSmall: "multismall"
  };

// classify nodes
edges.forEach(e => {
    if (e.node1.toUpperCase() == e.node1) {
        e.nodeType1 = NodeType.Big
    } else if (e.node1 == "start") {
        e.nodeType1 = NodeType.multiSmall
    } else if (e.node1 == "end") {
        e.nodeType1 = NodeType.multiSmall
    } else if (e.node1.length == 1) {
        e.nodeType1 = NodeType.singleSmall
    } else {
        e.nodeType1 = NodeType.multiSmall
    }
    if (e.node2.toUpperCase() == e.node2) {
        e.nodeType2 = NodeType.Big
    } else if (e.node2 == "start") {
        e.nodeType2 = NodeType.multiSmall
    } else if (e.node2 == "end") {
        e.nodeType2 = NodeType.multiSmall
    } else if (e.node2.length == 1) {
        e.nodeType2 = NodeType.singleSmall
    } else {
        e.nodeType2 = NodeType.multiSmall
    }
});


count = 0
findPaths2(edges, "start", "")
console.log("Part 2: Number of paths: %d", count)

function findPaths2(edges, from, path) {

    //console.log("from %s *%s*", from, path)
    if (from == "end") {
        path += "-end"
        console.log(path)
        count++
        return
    }
    var fromNodes = findFromNodes(edges, from)   

    fromNodes.forEach(e => {        
        if (e.node1 == from) {            
            console.log("check %s", e.node2)
            if (e.nodeType2 == NodeType.Big
                || (e.nodeType2 == NodeType.singleSmall && e.node2Visited < 2)
                || (e.nodeType2 == NodeType.multiSmall && e.node2Visited < 1)) {
                    increaseNodesVisited(edges, from)                
                    console.log("%s -> %s %s", e.node1, e.node2, e.node2Visited)
                    findPaths2(edges, e.node2, path + "-" + e.node1)
            }
        } else if (e.node2 == from) {            
            if (e.nodeType1 == NodeType.Big
                || (e.nodeType1 == NodeType.singleSmall && e.node1Visited < 2)
                || (e.nodeType1 == NodeType.multiSmall && e.node1Visited < 1)) {    
                    increaseNodesVisited(edges, from)                    
                    console.log("%s -> %s %s", e.node2, e.node1, e.node1Visited)
                    findPaths2(edges, e.node1, path + "-" + e.node2)
            }           
        }        
    });    
}

function findFromNodes(edges, node) {
    return edges.filter(e => {
        return e.node1 == node || e.node2 == node
    })
}

function increaseNodesVisited(edges, from) {
    edges.forEach(e => {
        if (e.node1 == from) {
            e.node1Visited++
        } else if (e.node2 == from) {
            e.node2Visited++
        }        
    });
}