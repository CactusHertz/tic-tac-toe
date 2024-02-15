function gameboard () {
    let board = [[1,2,3],[4,5,6],[7,8,9]];

    const getBoard = () => {
        return board;
    }

    const setPiece = (x, y, piece) =>{
        if (validMove(x,y)){
            board[x][y] = piece;
            console.log(`valid move: ${piece} placed at ${x},${y}`);
        }
        else {
            console.log('invalid move');
        }
    }

    const validMove = (x, y) => {
        if (board[x][y] != 'x' && board[x][y] != 'o'){     
            return true;
        }
        return false;
    }

    return {getBoard, setPiece};
}

function checkWin(board) {
    // checks if the board is in a completed state
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


board = gameboard();
boardDisplay(board.getBoard());
board.setPiece(0,0, 'x');
boardDisplay(board.getBoard());
board.setPiece(0,0, 'x');
boardDisplay(board.getBoard());

