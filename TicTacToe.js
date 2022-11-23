function setGameBoard() {
    const boardObjectPrefab = new Array;
    const player1 = player("player1","O");
    const player2 = player("player2","X");
    const thisTurn = document.querySelector(".turn");
    const gameBoard = document.querySelector(".gameboard");

    thisTurn.textContent = player1.getName() + " turn";

    for (let i=0; i<9; i++){
        boardObjectPrefab.push("");
        let boardObject = document.createElement("div");
        var turn = 0;
        boardObject.textContent = boardObjectPrefab[i];
        boardObject.setAttribute("class", "gameboard_item");
        boardObject.setAttribute("id", i);
        boardObject.addEventListener("click", (e) =>{
            if (boardObject.textContent == "" &&
            turn == 0){
                boardObject.textContent = player1.getSign();
                turn++;
                turn = turn % 2;
                thisTurn.textContent = player2.getName() + " turn";
            } else if (boardObject.textContent == "" &&
            turn == 1){
                boardObject.textContent = player2.getSign();
                turn++;
                turn = turn % 2;
                thisTurn.textContent = player1.getName() + " turn";
            }
        })
        gameBoard.appendChild(boardObject);
    }
}

function player(name,sign) {
    const getName = () => name;
    const getSign = () => sign;


    return {getName, getSign};
}

function win(){
    let board = document.querySelectorAll(".gameboard_item");

    for(let i = 0; i<9; i+=3){
        if(board[i].innerHTML == board[i+1].innerHTML &&
            board[i+1].innerHTML == board[i+2].innerHTML){
                console.log("win");
                break;
            }
    }

    for(let i = 0; i<3; i++){
        if(board[i].innerHTML == board[i+3].innerHTML &&
            board[i+3].innerHTML == board[i+6].innerHTML){
                console.log("win");
                break;
            }
    }

    if(board[0].innerHTML == board[4].innerHTML &&
        board[4].innerHTML == board[8].innerHTML){
            console.log("win");
        } else if(board[2].innerHTML == board[4].innerHTML &&
            board[4].innerHTML == board[6].innerHTML){
                console.log("win");
            }
}

setGameBoard();