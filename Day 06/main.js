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
    // https://github.com/romellem/advent-of-code/blob/master/2021/6/part-two.js

/**
 * Fish can only have an age of 0 - 8, so create an array of 9 items
 * and store the _count_ of all fish in that age.
 */
 input = readTextFile("input.txt");
 list = input[0].split(',');
 list = list.map((i) => Number(i));

 days = Array(9).fill(0);
 for (let day of list) {
     days[day]++;
 }
 
 for (let i = 0; i < 256; i++) {
     let six_fish = 0;
     let eight_fish = 0;
     for (let day = 0; day < days.length; day++) {
         let count = days[day];
         if (day === 0) {
             // Double the fish that are at age zero
 
             // The same fish loop back around to age 6
             six_fish = count;
 
             // The "spawned" fish get an age of 8
             eight_fish = count;
         } else {
             // Otherwise, "shift" each group of fish to the left (e.g. get 1 day younger)
             days[day - 1] = count;
         }
     }
 
     // After a complete day, add the "looped back" fish at age 6 to our array
     days[6] += six_fish;
 
     // Set the fish at age 8 to the number of fish that were spawned (don't add, because we don't "shift" in a 0 for day 8's slot)
     days[8] = eight_fish;
 }
 
 const all_fish = days.reduce((a, b) => a + b);
 console.log(all_fish);