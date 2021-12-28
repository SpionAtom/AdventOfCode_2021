// *** Day 17 ***
// https://adventofcode.com/2021/day/17

// input
var input = readTextFile("input.txt");

var params = input[0].match(/([-]*\d+)/g).map(function(item) {
    return parseInt(item, 10);
});
var target = {x: params[0], x2: params[1], y: params[2], y2: params[3]}
console.log("x = %d .. %d,  y = %d .. %d", target.x, target.x2, target.y, target.y2)


// var canvas;
// window.addEventListener('load', function(event) {
//     canvas = new CanvasGrid(10, 10, 10, 10)
// });


var pos = {x: 0, y: 0}
var vel = {x: 6, y: 9}
var hits = 0

    highestPosition = pos.y
    for (var x = 1; x <= 500; x++) {
        for (var y = -500; y <= 2000; y++) {
            pos = {x: 0, y: 0}
            vel = {x: x, y: y}
            var result = performThrow(vel, target) 
            if (result.hit) {
                hits++  
                if (result.highestValue > highestPosition) {
                    highestPosition = result.highestValue
                }
            }
        }
    }

console.log("Highest position: %d", highestPosition)
console.log("Hits: %d", hits)



function performThrow(vel, target) {
    var targetMissed = false, targetHit = false
    var highestValue = target.y

    for (var steps = 1; steps <= 10000 && (!targetMissed && !targetHit); steps++) {
        pos.x += vel.x
        pos.y += vel.y
        if (pos.y > highestValue) {
            highestValue = pos.y
        }
        //console.log("Position: %d,%d", pos.x, pos.y)
        vel.x -= Math.sign(vel.x)
        vel.y -= 1
        if (pos.x >= target.x && pos.y >= target.y & pos.x <= target.x2 && pos.y <= target.y2) {
            //console.log("Target hit!")
            targetHit = true
        }
        if (pos.y < target.y) {
            //console.log("Target missed!")
            targetMissed = true
        }

    }
    
    return {hit: targetHit, highestValue: highestValue}
}
