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
                array = allText.split(/\r?\n/);               
            }
        }
    }

    rawFile.send(null);
    return array;    
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function create2DArray(height, width, prefill) {
    var arr = new Array(height)
    for (var h = 0; h < height; h++) {
        arr[h] = new Array(width)
        for (var w = 0; w < width; w++) {
            arr[h][w] = prefill
        }
    }

    return arr
}

function output2DGrid(grid) {
    for (var r = 0; r < height; r++) {
        var o = ""
        for (var c = 0; c < width; c++) {
            o += grid[r][c] + ", "
        }
        console.log(o)
    }
}