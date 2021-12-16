// *** Day 15 ***
// https://adventofcode.com/2021/day/15

// input
var input = readTextFile("input.txt");

var height = input.length, width = input[0].length


// Part 1
var grid = create2DArray(height, width, null)
for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {        
        grid[y][x] = Number(input[y].charAt(x))
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
                grid[multiplyerY * height + y][multiplyerX * width + x] = multiplyRisk
            }
        }       

    }    
}
height *= multiplyer
width *= multiplyer




var costs = create2DArray(height, width, Number.MAX_VALUE)
costs[0][0] = 0

// fill top border
for (var w = 1; w < width; w++) {
    costs[0][w] = costs[0][w - 1] + grid[0][w]
}
// fill left border
for (var h = 1; h < height; h++) {
    costs[h][0] = costs[h - 1][0] + grid[h][0]
}

// do the minimum cost path algorithm up to 9 times
// in case there are steps going left or up again
// https://www.youtube.com/watch?v=lBRtnuxg-gU
for (var steps = 1; steps <= 9; steps++) {
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            var min = Math.min(
                col > 0 ? costs[row][col - 1] : Number.MAX_VALUE,
                row > 0 ? costs[row - 1][col] : Number.MAX_VALUE,
                col < width - 1 ? costs[row][col + 1] : Number.MAX_VALUE,
                row < height - 1 ? costs[row + 1][col] : Number.MAX_VALUE,
                )
            costs[row][col] = min + grid[row][col]
            if (row == 0 && col == 0)
            costs[row][col] = 0
        }
    }    
}
//output2DGrid(costs)



console.log("Minimum costs: %d", costs[height - 1][width - 1])