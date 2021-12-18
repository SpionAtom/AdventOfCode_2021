// *** Day 17 ***
// https://adventofcode.com/2021/day/17

// input
var input = readTextFile("input.txt");

var params = input[0].match(/([-]*\d+)/g).map(function(item) {
    return parseInt(item, 10);
});
var target = {x: params[0], x2: params[1], y: params[2], y2: params[3]}
console.log("x = %d .. %d,  y = %d .. %d", target.x, target.y, target.x2, target.y2)