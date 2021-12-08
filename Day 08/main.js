// *** Day 08 ***
// https://adventofcode.com/2021/day/8

// input
var input = readTextFile("input.txt");

// Part 1
var uniques = 0
input.forEach(line => {
    var output = line.split('|')[1].split(/(\s+)/).filter( e => e.trim().length > 0)
    uniques += output.filter(item => {
        return item.length == 2 || item.length == 4 || item.length == 3 || item.length == 7
    }).length
    
})
console.log("Part 1 Result: %d", uniques)


// Part 2
var sum = 0
input.forEach(line => {
    number = new Array(10).fill("")

    var signal = line.split('|')[0].split(/(\s+)/).filter( e => e.trim().length > 0)
    var output = line.split('|')[1].split(/(\s+)/).filter( e => e.trim().length > 0)
    
    // get numbers 1, 4, 7, 8
    signal.forEach(item => {
        if (item.length == 2) {
            number[1] = item.split('').sort().join('')
        } else if (item.length == 4) {
            number[4] = item.split('').sort().join('')
        } else if (item.length == 3) {
            number[7] = item.split('').sort().join('')
        } else if (item.length == 7) {
            number[8] = item.split('').sort().join('')
        }        
    })

    // get number 3 by getting a signal with length 5 that contains everything from 1
    signal.forEach(possibleThreeSignal => {
        if (possibleThreeSignal.length == 5) {
            if (number[1].split('').filter(e => {
                return (possibleThreeSignal.includes(e))
            }).length == 2) {
                number[3] = possibleThreeSignal.split('').sort().join('');                
            }
        }
    })

    // get number 9 by getting a signal with length 6 that contains everything from 4
    signal.forEach(possibleNineSignal => {
        if (possibleNineSignal.length == 6) {
            if (number[4].split('').filter(e => {
                return (possibleNineSignal.includes(e))
            }).length == 4) {
                number[9] = possibleNineSignal.split('').sort().join('');                
            }
        }
    })

    // get number 0 by getting a signal with length 6 that contains everything from 1 and that is not a 9
    signal.forEach(possibleZeroSignal => {
        if (possibleZeroSignal.length == 6 && possibleZeroSignal.split('').sort().join('') != number[9]) {
            if (number[1].split('').filter(e => {
                return (possibleZeroSignal.includes(e))
            }).length == 2) {
                number[0] = possibleZeroSignal.split('').sort().join('')
            }
        }
    })


    // get number 6 which is the only length 6 signal left - which means, no 0 or 9
    signal.forEach(possibleSixSignal => {
        if (possibleSixSignal.length == 6) {
            if ((number[9].split('').filter(e => {
                return (possibleSixSignal.includes(e))
            }).length != 6)
            && (number[0].split('').filter(e => {
                return (possibleSixSignal.includes(e))
            }).length != 6))         
            {
                number[6] = possibleSixSignal.split('').sort().join('');                
            }
        }
    })

    // get number 5 which is the only length 5 signal that is completly contained in 6    
    signal.forEach(possibleFiveSignal => {
        if (possibleFiveSignal.length == 5) {
            if (possibleFiveSignal.split('').filter(e => {
                return (number[6].split('').includes(e))
            }).length == 5) {
                number[5] = possibleFiveSignal.split('').sort().join('');                
            }
        }
    })

    // get number 2 which is the only length 5 signal that is not 5, 3
    signal.forEach(possibleTwoSignal => {
        if (possibleTwoSignal.length == 5) {
            if (possibleTwoSignal.split('').sort().join('') != number[5]
            && possibleTwoSignal.split('').sort().join('') != number[3]) {
                number[2] = possibleTwoSignal.split('').sort().join('');                
            }
        }
    })

        
    var outputString = "";
    output.forEach(outputDigit => { 
        outputDigit =  outputDigit.split('').sort().join('')      
        for (var i = 0; i < 10; i++) {            
            
            if (outputDigit == number[i]) {
                // console.log("%s %s          %s + + +", i, number[i], outputDigit)    
                outputString += i
            } else {
                // console.log("%s %s          %s", i, number[i], outputDigit)
            }
            
        }
    })
    console.log("+ + + + + digit: %s", outputString)
    sum += Number(outputString)       
})


console.log("Summe: %s", sum)

