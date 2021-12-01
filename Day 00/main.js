console.log("Hello %s %s %d", "Spion", "Atom", 100);

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
