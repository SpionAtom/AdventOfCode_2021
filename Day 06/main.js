// *** Day 06 ***
// https://adventofcode.com/2021/day/6

// input
var input = readTextFile("input.txt");
var list = input[0].split(',');
list = list.map((i) => Number(i));

list = new Array(1)
list[0] = 3
// Part 1
    console.log("Initial state:", list)

    for (var days = 1; days <= 64; days++) {
        var adding = 0
        for (var i = 0; i < list.length; i++) {
            if (list[i] == 0) {
                adding++
                list[i] = 6
            } else {
                list[i]--
            }
        }
        for (var i = 0; i < adding; i++) {
            list.push(8)
        }        
        console.log("After %s %s: length: %d", days.toString().padStart(2, ' '), days == 1 ? "day" : "days", list.length, list)
    }



    // Part 2
    /*

    input = readTextFile("input.txt");
    list = input[0].split(',');
    list = list.map((i) => Number(i));

console.log("Initial state:", list)

for (var days = 1; days <= 256; days++) {
    var adding = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] == 0) {
            adding++
            list[i] = 6
        } else {
            list[i]--
        }
    }
    for (var i = 0; i < adding; i++) {
        list.push(8)
    }        
    if (days == 256)
        console.log("After %s %s: length: %d", days.toString().padStart(2, ' '), days == 1 ? "day" : "days", list.length, list[0])
    else if (new Date().getSeconds % 5 == 0)
        console.log(Date.now)
}


*/