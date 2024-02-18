function gameboard () {
    let board = [[1,2,3],[4,5,6],[7,8,9]];
    let movesMade = 0;
    let piece = 'X';

    const getBoard = () => {
        return board;
    };

    const setPiece = (x, y, square) => {
        if (validMove(x,y)){
            board[x][y] = piece;
            square.textContent = piece;
            console.log(`valid move: ${piece} placed at ${x},${y}`);
            movesMade++;
            togglePiece();
            return true;
        }
        else {
            console.log('invalid move');
            return false;
        }
    };

    const validMove = (x, y) => {
        if (board[x][y] != 'X' && board[x][y] != '0'){     
            return true;
        }
        return false;
    };

    const checkWin = () => {
        // checks if the board is in a completed states
    
        // check columns
        for (let c = 0; c < 3; c++){
            let piece = board[c][0];
            if (board[c][1] == piece && board[c][2] == piece){
                return piece;
            }
        }
        // checks rows
        for (let r = 0; r < 3; r++){
            let piece = board[0][r];
            if (board[1][r] == piece && board[2][r] == piece){
                return piece;
            }
        }
        //check diagonals
        let piece = board[0][0]
        if(tttboard[1][1] == piece && board[2][2] == piece){
            return piece;
        }
        piece = board[0][2]
        if(board[1][1] == piece && board[2][0] == piece){
            return piece;
        }
        // check full
        if(movesMade >= 9){
            return 'tie';
        }
        return 'no'
    }

    const togglePiece = () => {
        if(piece == 'X'){
            piece = 'O';
        }
        else if(piece == 'O'){
            piece = 'X';
        }
    }

    return {getBoard, checkWin, setPiece};
}



function gameController() {
    //controls the state of the game and gets user input 
    let board = null;

    const startGame = () => {
        board = gameboard();
    }

    const boardSquares = document.querySelectorAll('.board-square');
    boardSquares.forEach((div) => {
        div.addEventListener('click',() =>{
            if(board != null){
                let r = div.getAttribute('r');
                let c = div.getAttribute('c');

                console.log(r + ' ' + c);            
                board.setPiece(r, c, div);
                boardDisplay(board.getBoard());
            
            }     
            else{
                console.log('no board');
            }
        });
    });

    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click', () => {
        startGame();
        boardSquares.forEach((div) => {
            div.textContent = '';
        });
    });

   return {startGame};
}

function boardDisplay (board) {
    // Displays the board in text form 
    for (let i = 0; i < 3; i++){
        console.log(board[i])
    }
}

const gc = gameController();
gc.startGame();
