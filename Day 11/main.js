// *** Day 11 ***
// https://adventofcode.com/2021/day/11

// input
var input = readTextFile("input.txt");
var width = 10, height = 10
var grid = create2DArray(height, width, 0)
for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
        grid[r][c] = new Number(input[r].charAt(c))
    }
}

output2DGrid(grid)

// Part 1
var flash = 0
for (var step = 1; step <= 100; step++) {
    // increase energy levels
    for (var r = 0; r < height; r++) {
        for (var c = 0; c < width; c++) {
            flash += increase(grid, r, c)
        }
    }

    // energy levels back to zero
    for (var r = 0; r < height; r++) {
        for (var c = 0; c < width; c++) {
            if (grid[r][c] > 9) {
                grid[r][c] = 0
            }
        }
    }
    console.log("After step %d - %d flashes", step, flash)
}


// Part 2
grid = create2DArray(height, width, 0)
for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
        grid[r][c] = new Number(input[r].charAt(c))
    }
}

var flash = 0
var step = 0
var f = 0
do {
    // increase energy levels
    for (var r = 0; r < height; r++) {
        for (var c = 0; c < width; c++) {
            f = 
            flash += increase(grid, r, c)
        }
    }

    // energy levels back to zero
    f = 0
    for (var r = 0; r < height; r++) {
        for (var c = 0; c < width; c++) {
            if (grid[r][c] > 9) {
                grid[r][c] = 0
                f++
            }
        }
    }
    //console.log("After step %d - %d flashes", step, flash)
    step++
} while(f < 100)
console.log("step with 100 flashes: %d", step)

function increase(grid, r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
        return 0
    }

    //console.log("r %d, c %d %d", r, c, grid.length)
    if (grid[r][c] > 9) {
        return 0
    }

    grid[r][c]++

    if (grid[r][c] > 9)
        return 1 + increase(grid, r - 1, c - 1)
                 + increase(grid, r - 1, c + 0)
                 + increase(grid, r - 1, c + 1)
                 + increase(grid, r + 0, c - 1)
                 + increase(grid, r + 0, c + 1)
                 + increase(grid, r + 1, c - 1)
                 + increase(grid, r + 1, c + 0)
                 + increase(grid, r + 1, c + 1)

    return 0
}