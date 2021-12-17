// *** Day 17 ***
// https://adventofcode.com/2021/day/17

// input
var input = readTextFile("input.txt");

var params = input[0].match(/(\d+)/g)
var target = {x: params[0], y: params[1], x2: params[2], y2: params[3]}
console.log("x=%d..%d  y=%d..%d", target.x, target.y, target.x2, target.y2)