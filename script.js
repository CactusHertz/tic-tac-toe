function gameboard () {
    var board = [[1,2,3],[4,5,6],[7,8,9]];
    var movesMade = 0;

    const getBoard = () => {
        return board;
    };
  
    const getMove = () => {
        return movesMade;
    };

    const setPiece = (x, y, piece) => {
        if (validMove(x,y)){
            board[x][y] = piece;
            console.log(`valid move: ${piece} placed at ${x},${y}`);
            movesMade++;
            return true;
        }
        else {
            console.log('invalid move');
            return false;
        }
    };

    const validMove = (x, y) => {
        if (board[x][y] != 'x' && board[x][y] != 'o'){     
            return true;
        }
        return false;
    };

    return {getBoard, getMove, setPiece};
}

function checkWin(tttboard, numMoves) {
    // checks if the board is in a completed states

    // check columns
    for (let c = 0; c < 3; c++){
        let piece = tttboard[c][0];
        if (tttboard[c][1] == piece && tttboard[c][2] == piece){
            return piece;
        }
    }
    // checks rows
    for (let r = 0; r < 3; r++){
        let piece = tttboard[0][r];
        if (tttboard[1][r] == piece && tttboard[2][r] == piece){
            return piece;
        }
    }
    //check diagonals
    let piece = tttboard[0][0]
    if(tttboard[1][1] == piece && tttboard[2][2] == piece){
        return piece;
    }
    piece = tttboard[0][2]
    if(tttboard[1][1] == piece && tttboard[2][0] == piece){
        return piece;
    }
    // check full
    if(numMoves >= 9){
        return 'tie';
    }

    return 'no'
}

function gameController() {
    //controls the state of the game and gets user input 
}

function boardDisplay (board) {
    // Displays the board in text form 
    for (let i = 0; i < 3; i++){
        console.log(board[i])
    }
}



const board = gameboard();
boardDisplay(board.getBoard());
console.log(board.getMove());
console.log(checkWin(board.getBoard(), board.getMove()));

board.setPiece(0, 0, 'x');
boardDisplay(board.getBoard());
console.log(checkWin(board.getBoard(), board.getMove()));

board.setPiece(0,1, 'x');
boardDisplay(board.getBoard());
console.log(checkWin(board.getBoard(), board.getMove()));

board.setPiece(0,2, 'x');
boardDisplay(board.getBoard());
console.log(checkWin(board.getBoard(), board.getMove()));


