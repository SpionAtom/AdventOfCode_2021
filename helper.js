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