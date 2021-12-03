// *** Day 02 ***
// https://adventofcode.com/2021/day/2

// input
var lines = readTextFile("input.txt");

// Part 1
var horizontal = 0, vertical = 0;

for (var i = 0; i < lines.length; i++) {
    var command = lines[i].split(' ')[0];
    var parameter = parseInt(lines[i].split(' ')[1]);
    // console.log("command: %s %d", command, parameter);

    if (command == "forward")
        horizontal += parameter;

    if (command == "down")
        vertical += parameter

    if (command == "up")
        vertical -= parameter
    
}
console.log("Part 1:")
console.log("Horizontal: %d, Vertical: %d", horizontal, vertical);
console.log("Solution: %d", horizontal * vertical)


// Part 2
var horizontal = 0, vertical = 0, aim = 0;

for (var i = 0; i < lines.length; i++) {
    var command = lines[i].split(' ')[0];
    var parameter = parseInt(lines[i].split(' ')[1]);
    // console.log("command: %s %d", command, parameter);

    if (command == "forward") {
        horizontal += parameter;
        vertical += aim * parameter;
    }        

    if (command == "down")
        aim += parameter

    if (command == "up")
        aim -= parameter
    
}
console.log("Part 2:")
console.log("Horizontal: %d, Vertical: %d, Aim: %d", horizontal, vertical, aim);
console.log("Solution: %d", horizontal * vertical)