// *** Day 01 ***
// https://adventofcode.com/2021/day/1

// input
var lines = readTextFile("input.txt");
var numbers = lines.map(Number);


// Part 1
var increases = 0;
for (var i = 1; i < numbers.length; i++) {    
    if (numbers[i] > numbers[i - 1])    
    {
        increases++;
    }    
}
console.log("Part 1:")
console.log("Increases: %d", increases);


// Part 2
var increases = 0;
for (var i = 1; i < numbers.length - 2; i++) {    
    if (numbers[i] + numbers[i + 1] + numbers[i + 2] > numbers[i - 1] + numbers[i + 0] + numbers[i + 1])    
    {
        increases++;
    }    
}
console.log("Part 2: windows measurement")
console.log("Increases: %d", increases);







