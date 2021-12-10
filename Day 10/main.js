// *** Day 10 ***
// https://adventofcode.com/2021/day/10

// input
var input = readTextFile("input.txt");

// round ()
var roundCounter = 0
// square []
var squareCounter = 0
// curly {}
var curlyCounter = 0
// angle <>
var angleCounter = 0


// Part 1
var errorscore = 0;
var incompleteLines = input.filter(line => {

   var stack = [], errorsnotyetfound = true

    for (var i = 0; i < line.length && errorsnotyetfound; i++) {
        if (line.charAt(i) == '(') {
            stack.push('(')
        } else if (line.charAt(i) == '[') {
            stack.push('[')
        } else if (line.charAt(i) == '{') {
            stack.push('{')
        } else if (line.charAt(i) == '<') {
            stack.push('<')
        } else if (line.charAt(i) == ')') {            
            var c = stack.pop()
            if (c != '(') {
                errorscore += 3
                errorsnotyetfound = false           
            }
        } else if (line.charAt(i) == ']') {
            var c = stack.pop()
            if (c != '[') {
                errorscore += 57
                errorsnotyetfound = false           
            }
        } else if (line.charAt(i) == '}') {
            var c = stack.pop()
            if (c != '{') {
                errorscore += 1197
                errorsnotyetfound = false           
            }
        } else if (line.charAt(i) == '>') {
            var c = stack.pop()
            if (c != '<') {
                errorscore += 25137
                errorsnotyetfound = false           
            }
        }        
    }
    return errorsnotyetfound
})

console.log("Total Error Score: %d", errorscore)


// Part 2
var completionScore = []

incompleteLines.forEach(line => {
    var stack = []

    for (var i = 0; i < line.length; i++) {
        if (line.charAt(i) == '(') {
            stack.push('(')
        } else if (line.charAt(i) == '[') {
            stack.push('[')
        } else if (line.charAt(i) == '{') {
            stack.push('{')
        } else if (line.charAt(i) == '<') {
            stack.push('<')
        } else if (line.charAt(i) == ')') {            
            var c = stack.pop()            
        } else if (line.charAt(i) == ']') {
            var c = stack.pop()
        } else if (line.charAt(i) == '}') {
            var c = stack.pop()
        } else if (line.charAt(i) == '>') {
            var c = stack.pop()
        }
    }

    // now clear up the stack
    var score = 0
    while (stack.length > 0) {
        var c = stack.pop()
        if (c == '(') {
            score = 5 * score + 1
        } else if (c == '[') {
            score = 5 * score + 2
        } else if (c == '{') {
            score = 5 * score + 3
        } else if (c == '<') {
            score = 5 * score + 4
        }        
    }
    completionScore.push(score)
});


completionScore.sort((a, b) => a - b)

console.log(completionScore)
console.log("middle score: %d", completionScore[Math.floor(completionScore.length / 2)])