// *** Day 15 ***
// https://adventofcode.com/2021/day/15

// input
var input = readTextFile("input.txt");

var height = input.length, width = input[0].length


// Part 1
var grid = create2DArray(height, width, null)
for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
        grid[y][x] = {y: y, x: x, risk: Number(input[y].charAt(x)), visited: false, dist: Number.MAX_VALUE, prev: null}
    }
}

// Part 2
var multiplyer = 5
var grid = create2DArray(multiplyer * height, multiplyer * width, null)

for (var multiplyerY = 0; multiplyerY < multiplyer; multiplyerY++) {
    for (var multiplyerX = 0; multiplyerX < multiplyer; multiplyerX++) {

        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                var multiplyRisk = (Number(input[y].charAt(x)) + multiplyerY + multiplyerX) % 9
                if (multiplyRisk == 0) multiplyRisk = 9
                grid[multiplyerY * height + y][multiplyerX * width + x] = {y: multiplyerY * height + y, x: multiplyerX * width + x, risk: multiplyRisk, visited: false, dist: Number.MAX_VALUE, prev: null}
            }
        }       

    }    
}
height *= multiplyer
width *= multiplyer
for (var y = 0; y < height; y++) {
    var l = ""
    for (var x = 0; x < width; x++) {
        l += grid[y][x].risk
    }
    console.log(l)
}




// init start
grid[0][0].dist = 0
grid[0][0].prev = grid[0][0]

var current = smallestUnvisited(grid)
var visited = 0
while (current != null && visited < 99999999) {    
    //console.log("%d current: %o", visited, current)
    current.visited = true   
    visited++
    
    // neighbour above
    if (current.y > 0) {
        if (!grid[current.y - 1][current.x].visited) {
            if (current.dist + grid[current.y - 1][current.x].risk < grid[current.y - 1][current.x].dist) {
                grid[current.y - 1][current.x].dist = current.dist + grid[current.y - 1][current.x].risk
                grid[current.y - 1][current.x] = current
            }
        }
    }
    // neighbour below
    if (current.y < height - 1) {
        if (!grid[current.y + 1][current.x].visited) {
            if (current.dist + grid[current.y + 1][current.x].risk < grid[current.y + 1][current.x].dist) {
                grid[current.y + 1][current.x].dist = current.dist + grid[current.y + 1][current.x].risk
                grid[current.y + 1][current.x].prev = current
            }
        }
    }
    // neighbour left
    if (current.x > 0) {
        if (!grid[current.y][current.x - 1].visited) {
            if (current.dist + grid[current.y][current.x - 1].risk < grid[current.y][current.x - 1].dist) {
                grid[current.y][current.x - 1].dist = current.dist + grid[current.y][current.x - 1].risk
                grid[current.y][current.x - 1].prev = current
            }
        }
    }
    // neighbour right
    if (current.x < width - 1 ) {
        if (!grid[current.y][current.x + 1].visited) {
            if (current.dist + grid[current.y][current.x + 1].risk < grid[current.y][current.x + 1].dist) {
                grid[current.y][current.x + 1].dist = current.dist + grid[current.y][current.x + 1].risk
                grid[current.y][current.x + 1].prev = current
            }
        }
    }

    current = smallestUnvisited(grid)
}


var current = grid[height - 1][width - 1]
var steps = 0
var totalrisk = 0
while (current != grid[0][0] && steps < 99999999) {
    steps++
    totalrisk += current.risk
     //console.log("%d %o", steps, current)
     current = current.prev
 }
//console.log("%d %o", steps, current)
console.log("Total risk: %d", totalrisk)





function smallestUnvisited(grid) {
    var height = grid.length, width = grid[0].length
    var su = null
    var smallest = Number.MAX_VALUE

    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            if (!grid[y][x].visited && grid[y][x].dist < smallest) {
                smallest = grid[y][x].dist
                su = grid[y][x]
                //console.log("found new smallest %d %d", y, x)
            }
        }
    }
    
    return su
}