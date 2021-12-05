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



// Part 1

// prefill 2d-array with zeros
var field = Array(maxWidth + 1).fill().map(() => Array(maxHeight + 1).fill(0));

line.forEach(l => {
    if (l.x1 == l.x2) {
        for (var y = Math.min(l.y1, l.y2); y <= Math.max(l.y1, l.y2); y++) {
            field[l.x1][y]++
        }
    }
    if (l.y1 == l.y2) {
        for (var x = Math.min(l.x1, l.x2); x <= Math.max(l.x1, l.x2); x++) {
            field[x][l.y1]++
        }
    }
    
})

printField(field)
var solution = 0
for (var x = 0; x < field.length; x++) {
    solution += field[x].filter(d => d >= 2).length;
}
console.log("Areas >= 2: %d", solution)
console.log("\n")

// Part 2

// prefill 2d-array with zeros
field = Array(maxWidth + 1).fill().map(() => Array(maxHeight + 1).fill(0));

line.forEach(l => {

    var dx = Math.sign(l.x2 - l.x1)
    var dy = Math.sign(l.y2 - l.y1)

    var x = l.x1
    var y = l.y1
    field[x][y]++
    while(x != l.x2 || y != l.y2)  {
        x += dx
        y += dy
        field[x][y]++
    }
    
})

printField(field)
var solution = 0
for (var x = 0; x < field.length; x++) {
    solution += field[x].filter(d => d >= 2).length;
}
console.log("Areas >= 2: %d", solution)
console.log("\n")





function printField(field) {
    for (var y = 0; y < field[0].length; y++) {
        var line = "";
        for (var x = 0; x < field.length; x++) {
            line += field[x][y] + ", "
        }
        console.log(y + ": " + line)
    }

}