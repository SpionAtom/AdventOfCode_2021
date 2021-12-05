// *** Day 05 ***
// https://adventofcode.com/2021/day/5

// input
var input = readTextFile("input.txt");
var line = [];

var index = 0;
var maxWidth = 0, maxHeight = 0
input.forEach(inp => {
    numbers = inp.match(/(\d+)/g)
    numbers = numbers.map((i) => Number(i));
    if (numbers[0] > maxWidth) maxWidth = numbers[0]
    if (numbers[1] > maxHeight) maxHeight = numbers[1]
    if (numbers[2] > maxWidth) maxWidth = numbers[2]
    if (numbers[3] > maxHeight) maxHeight = numbers[3]
    line[index++] = {x1: numbers[0], y1: numbers[1], x2: numbers[2], y2: numbers[3]}
})

// prefill 2d-array with zeros
var field = Array(maxWidth + 1).fill().map(() => Array(maxHeight + 1).fill(0));


// Part 1

line.forEach(l => {
    if (l.x1 == l.x2) {
        for (var y = Math.min(l.y1, l.y2); y < Math.max(l.y1, l.y2); y++) {
            field[l.x1][y]++
        }
    }
    if (l.y1 == l.y2) {
        for (var x = Math.min(l.x1, l.x2); x < Math.max(l.x1, l.x2); x++) {
            field[x][l.y1]++
        }
    }
    
})

console.log(field)