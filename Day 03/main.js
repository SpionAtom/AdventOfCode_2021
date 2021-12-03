// input
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var array;
    rawFile.open("GET", file, false);    
    rawFile.onreadystatechange = function ()    
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                array = allText.split('\n');                
            }
        }
    }
    rawFile.send(null);
    return array;    
}

var lines = readTextFile("input.txt");
var inputLength = 12

// Part 1
    var gamma = "";
    var epsilon = "";

    for (var p = 0; p < inputLength; p++) {    
        gamma += getMostCommenBit(lines, p).toString();
        epsilon += getLeastCommenBit(lines, p).toString();
    }

    //binary string to number
    var gammaNumber = parseInt( gamma.split('').join(''), 2 );
    var epsilonNumber = parseInt( epsilon.split('').join(''), 2 );

    console.log("Part 1:")
    console.log("Gamma: %s, Epsilon: %s", gamma, epsilon);
    console.log("Numbers: %d, %d", gammaNumber, epsilonNumber);
    console.log("Solution: %d", gammaNumber * epsilonNumber);


// Part 2
var oxygenList = Array.from(lines);
var CO2List = Array.from(lines);

for (var p = 0; p < inputLength; p++) {

    if (oxygenList.length > 1) {        
        oxygenList = oxygenList.filter(item => item.charAt(p) != getMostCommenBit(oxygenList, p))
    }
    
    if (CO2List.length > 1) {        
        CO2List = CO2List.filter(item => item.charAt(p) != getLeastCommenBit(CO2List, p))
    }
}
//binary string to number
var oxygenNumber = parseInt( oxygenList[0].split('').join(''), 2 );
var CO2Number = parseInt( CO2List[0].split('').join(''), 2 );            


console.log("Part 1:")
console.log("Oxygen: %d, CO2: %d", oxygenNumber, CO2Number);
console.log("Solution: %d",  oxygenNumber * CO2Number);




function getMostCommenBit(arr, pos) {
    
    var ones = 0, zeros = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charAt(pos) == '1') {              
            ones++
        } else {
            zeros++
        }
    }
    return ones >= zeros ?  1 : 0
}

function getLeastCommenBit(arr, pos) {
    
    var ones = 0, zeros = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charAt(pos) == '1') {              
            ones++
        } else {
            zeros++
        }
    }
    return ones < zeros ?  1 : 0
}