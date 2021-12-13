// *** Day 13 ***
// https://adventofcode.com/2021/day/13

// input
var input = readTextFile("input.txt");
//var width = 1300, height = 1300
var width = 0, height = 0
var paper = create2DArray(1500, 1500, '.')


// Part 1 + 2
var part = 0 // 0 - reading dots
             // 1 - reading folds
input.forEach(line => {
    if (line == '') {
        part++
    } else {
        var numbers = line.match(/(\d+)/g)
        numbers = numbers.map((i) => Number(i));

        if (part == 0) { // put a dot on the paper
            var x = numbers[0], y = numbers[1]
            if (x + 1 > width) width = x + 1
            if (y + 1 > height) height = y + 1
            paper[y][x] = '#'
        } else { // fold the paper
            var axis = numbers[0]
            if (line.includes('y')) { //folding along y-axis
                console.log("fold y %d", axis)
                for (var y = axis + 1; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        if (paper[y][x] == '#') {
                            var half = Math.floor(height / 2)
                            paper[half - (y - half)][x] = '#'
                        }
                    }
                }
                height = half                
                console.log(countDots(paper, width, height))
            } else { //folding along x-axis
                console.log("fold x %d", axis)
                for (var x = axis + 1; x < width; x++) {

                    for (var y = 0; y < height; y++) {
                        if (paper[y][x] == '#') {
                            var half = Math.floor(width / 2)
                            paper[y][half - (x - half)] = '#'
                        }
                    }
                }
                width = half                
                console.log(countDots(paper, width, height))
            }

        }
    }
});

console.log(width, height)
output2DGrid(paper)



function countDots(grid, width, height) {
    var count = 0;
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            if (grid[y][x] == '#') count++

        }
    }
    return count
}