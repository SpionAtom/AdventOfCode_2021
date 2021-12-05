// *** Day 04 ***
// https://adventofcode.com/2021/day/4

// input
var lines = readTextFile("input.txt");
var boardCount = (lines.length - 1) / 6;
var cols = 5, rows = 5;

var randoms = lines[0].split(',');
var board = new Array(boardCount); //board[number of board][row][col]

for (var i = 0; i < boardCount; i++) {
    board[i] = new Array(rows);
    for (var r = 0; r < rows; r++) {
        board[i][r] = lines[i * 6 + 2 + r].split(/(\s+)/).filter( e => e.trim().length > 0)
    }
}




// Part 1 + 2
    // copy an array
    var playboard = board.map((x) => x);

    randoms.forEach(rnd => { 
        console.log("insert random: %s", rnd)       
        for (var b = boardCount - 1; b >= 0; b--) {
            var pos = findNumber(rnd, playboard[b])
            if (pos) {
                playboard[b][pos.r][pos.c] = 'X'
                drawBoard(playboard[b], b)
                if (checkWin(playboard[b], pos)) {
                    console.log("Gewonnen!");
                    var sum = boardSum(playboard[b])                    
                    console.log("last random: %d", parseInt(rnd))
                    console.log("score: %d", sum * parseInt(rnd))

                    for (var row = 0; row < rows; row++) {
                        for (var col = 0; col < cols; col++) {
                            playboard[b][row][col] = "*"
                        }
                    }
                    
                }
            }
        }



    });

    function findNumber(number, board) {
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                if (parseInt(board[r][c]) == parseInt(number))
                    return {r, c}
            }
        }
        return null
    }

    function checkWin(board, pos) {

        var won = true;
        // check horizontals
        for (var i = 0; i < cols; i++) {
            if (board[pos.r][i] != 'X') {
                won = false;
                break;
            }
        }
        if (won) {
            return true
        }

        won = true        
        // check verticals
        for (var i = 0; i < rows; i++) {
            if (board[i][pos.c] != 'X') {
                won = false;
                break;
            }
        }

        return won;
    }

    function boardSum(board) {
        var sum = 0
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (board[row][col] != "X")
                    sum += parseInt(board[row][col])
            }
        }
        return sum
    }

    function drawBoard(board, b) {
        console.log("- %d -", b)
        for (var row = 0; row < rows; row++) {
            console.log(board[row])
        }
        console.log("-")  
    }

