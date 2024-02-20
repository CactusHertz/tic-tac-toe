function gameboard () {
    let board = [[1,2,3],[4,5,6],[7,8,9]];
    let movesMade = 0;
    let piece = 'X';
    let winner = null;
    let gameFinished = false;

    const getBoard = () => {
        return board;
    };

    const setPiece = (x, y, square) => {
        if (validMove(x,y) && gameFinished == false){
            board[x][y] = piece;
            square.textContent = piece;
            console.log(`valid move: ${piece} placed at ${x},${y}`);
            
            movesMade++;
            togglePiece();

            winner = checkWin();
            if (winner != null){
                console.log(winner);
                gameFinished = true;
            }
            displayState();
            return true;
        }
        else {
            console.log('invalid move');
            return false;
        }
    };

    const validMove = (x, y) => {
        if (board[x][y] != 'X' && board[x][y] != 'O' && gameFinished != true){     
            return true;
        }
        return false;
    };

    const displayState = () => {
        const state = document.querySelector('.state');
        if (gameFinished == true){
            if (winner == 'X'){
                state.textContent = 'Player 1 won the game';
            }
            else if (winner == 'O'){
                state.textContent = 'Player 2 won the game';
            }
            else{
                state.textContent = 'Tie';
            }
        }
        else if (piece == 'X') {
            state.textContent = "Player 1's turn";
        }
        else if (piece == 'O'){
            state.textContent = "Player 2's turn";
        }

    }

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
        if(board[1][1] == piece && board[2][2] == piece){
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
        return null;
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
