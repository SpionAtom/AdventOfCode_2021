// *** Day 13 ***
// https://adventofcode.com/2021/day/13

// input
var input = readTextFile("input.txt");
//var width = 1300, height = 1300
var width = 0, height = 0
var paper = create2DArray(1300, 1300, '.')


// Part 1
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
            if (x > width) width = x
            if (y > height) height = y
            paper[y][x] = '#'
        } else { // fold the paper
            var axis = numbers[0]
            if (line.includes('y')) {
                console.log("fold y %d", axis)
                for (var y = axis; y < height; y++) {

                    if (paper[y][x] == '#') {
                        paper[y - ]
                    }

                }
            } else {
                console.log("fold x %d", axis)
            }

        }
    }
});