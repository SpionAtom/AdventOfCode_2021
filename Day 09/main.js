// *** Day 09 ***
// https://adventofcode.com/2021/day/9

// input
var input = readTextFile("input.txt");
var lowpoint = new Array()

// Part 1
var risk = 0
for (var row = 0; row < input.length; row++) {
    for (var col = 0; col < input[0].length; col++) {
        var r = getRisk(row, col, input)
        if (r > 0) {
            lowpoint.push({row: row, col: col})
            risk += r
        } 
    }
}
console.log("Total risk: %d", risk)

// Part 2
var basin = new Array()
lowpoint.forEach(p => {    
        var size = fillBasin(p, [...input])
        basin.push(size)        
});

basin.sort((a, b) => a - b).reverse()
console.log("multiplay 3 largest basins: %d", basin[0] * basin[1] * basin[2])

function fillBasin(point, arr) {        


    if (arr[point.row].charAt(point.col) == '9' || arr[point.row].charAt(point.col) == 'X') {
        return 0
    }

    var value = 1
    arr[point.row] = setCharAt(arr[point.row], point.col, 'X')    
    
    if (point.row > 0) value += fillBasin({row: point.row - 1, col: point.col}, arr)
    if (point.row < arr.length - 1) value += fillBasin({row: point.row + 1, col: point.col}, arr)
    if (point.col > 0) value += fillBasin({row: point.row, col: point.col - 1}, arr)
    if (point.col < arr[0].length - 1) value += fillBasin({row: point.row, col: point.col + 1}, arr)
    return value
}



function getRisk(row, col, input) {
    var risk = 0
    var midpointvalue = Number(input[row].charAt(col))
    var area = new Array(9)
    //console.log("row %d col %d value %d", row, col, midpointvalue)

    area.push(midpointvalue)
    if (row > 0) area.push(Number(input[row - 1].charAt(col)))
    if (col > 0 ) area.push(Number(input[row].charAt(col - 1)))
    if (row < input.length - 1) area.push(Number(input[row + 1].charAt(col)))
    if (col < input[0].length - 1) area.push(Number(input[row].charAt(col + 1)))

    area.sort((a, b) => a - b)    

    if (midpointvalue == area[0] && area[0] != area[1]) {        
        risk = midpointvalue + 1
    }


    return risk

}