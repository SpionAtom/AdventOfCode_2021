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







