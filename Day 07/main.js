// *** Day 07 ***
// https://adventofcode.com/2021/day/7

// input
var input = readTextFile("input.txt");
var list = input[0].split(',');

list.sort()

// Part 1
var minsteps = 99999999
for (var checkpos = list[0]; checkpos < list[list.length - 1]; checkpos++) {    
    var steps = 0
    for (var i = 0; i < list.length; i++) {
        steps += Math.abs(checkpos - list[i])
    }
    if (steps < minsteps) minsteps = steps
    console.log("Check position: %s     Total steps: %d", checkpos, steps)
}
console.log("Minimal steps: " + minsteps)


// Part 1
var mincosts = 99999999
for (var checkpos = list[0]; checkpos < list[list.length - 1]; checkpos++) {    
    var costs = 0    
    for (var i = 0; i < list.length; i++) {
        var dif = Math.abs(checkpos - list[i])
        costs += (dif * (dif + 1)) / 2 
    }    
    if (costs < mincosts) mincosts = costs
    console.log("Check position: %s     Total costs: %d", checkpos, costs)
}
console.log("Minimal costs: " + mincosts)

