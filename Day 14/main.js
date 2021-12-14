// *** Day 14 ***
// https://adventofcode.com/2021/day/14

// input
var input = readTextFile("input.txt");
var originTemplate = input[0]
var rules = new Array()
for (var i = 2; i < input.length; i++) {
    var params = input[i].match(/(\w+)/g)
    rules.push({origin: params[0], insert: params[1]})
}

console.log("Template: %s", originTemplate)

// Part 1
var template = originTemplate

    for (var step = 1; step <= 2; step++) {    

        // apply the rules
        var inserts = []
        rules.forEach(r => {    
            var pos = template.indexOf(r.origin)
            while (pos > -1) {               
                //console.log("rule: %s -> %s", r.origin, r.insert)
                inserts.push({pos: pos, val: r.insert})
                pos = template.indexOf(r.origin, pos + 1)
            }
        });
        
        inserts.sort((a, b) => a.pos - b.pos)

        var offset = 1
        inserts.forEach(insert => {
            template = insertString(template, insert.val, insert.pos + offset)
            offset++
        });

        // output
        if (step <= 5)    
        console.log("After step %d: length: %d   %s", step, template.length, template)
    }

    // count stuff
    var characters = []
    for (var i = 0; i < 26; i++) {
        var c = String.fromCharCode(65 + i)
        var occurences = template.split(c).length - 1
        if (occurences > 0) {            
            characters.push(occurences)
            console.log("%s %d", c, occurences)
        }        
    }

    characters.sort((a, b) => a - b)    
    console.log("Result: %d\n\n\n", characters[characters.length - 1] - characters[0])


// Part 2

    // create dictionary for every pair of characters
    var dict = {}
    for (var x = 65; x <= 90; x++) {
        for (var y = 65; y <= 90; y++) {
            var pair = String.fromCharCode(x) + String.fromCharCode(y)
            dict[pair] = 0            
        }
    }
        
    template = originTemplate
    console.log("Part 2")
    console.log(template)

    // init values
    for (var c = 0; c < template.length - 1; c++) {
        var pair = template.substring(c, c + 2)        
        dict[pair]++
    }

    // init countChars
    var countChars = new Array(26)
    for (var c = 65; c < 90; c++) {        
        countChars[String.fromCharCode(c)] = 0
    }
    for (var c = 0; c < template.length; c++) {
        countChars[template.charAt(c)]++
    }
   

    for (var step = 1; step <= 40; step++) {
        
        // apply the rules
        var dictTemp = {};
        Object.assign(dictTemp, dict);    

        rules.forEach(r => {
            var howOftenDoesThePairAppear = dict[r.origin]
            if (howOftenDoesThePairAppear > 0)            {
                dictTemp[r.origin]-=howOftenDoesThePairAppear
                dictTemp[r.origin.charAt(0) + r.insert]+=howOftenDoesThePairAppear
                dictTemp[r.insert + r.origin.charAt(1)]+=howOftenDoesThePairAppear
                countChars[r.insert]+=howOftenDoesThePairAppear            
            }
        });

        Object.assign(dict, dictTemp)
    }


    var smallest = Number.MAX_SAFE_INTEGER
    var highest = 0

    for (const [key, value] of Object.entries(countChars)) {        
        if (value > highest) highest = value
        if (value < smallest && value > 0) smallest = value
    }

    console.log("Highest: %d  Smallest: %d  Diff: %d", highest, smallest, highest - smallest)