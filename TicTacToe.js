function setGameBoard() {
    const boardObjectPrefab = new Array;
    const player1 = player("player1","O");
    const player2 = player("player2","X");
    const thisTurn = document.querySelector(".turn");
    const gameBoard = document.querySelector(".gameboard");
    const reset = document.querySelector(".reset");
    let won = false;
    let turn = 0;

    thisTurn.textContent = player1.getName() + " turn";

    let resetbtn = document.createElement("button");
    resetbtn.textContent = "Reset";
    resetbtn.addEventListener("click", (e) => {
        let board = document.querySelectorAll(".gameboard_item");
        for (let i = 0; i < 9; i++){
            board[i].innerHTML = boardObjectPrefab[i];
        }
        turn = 0;
        thisTurn.textContent = player1.getName() + " turn";
    })

    reset.appendChild(resetbtn);

    function isWin(){
        let board = document.querySelectorAll(".gameboard_item");
    
        for(let i = 0; i<9; i+=3){
            if(board[i].innerHTML == board[i+1].innerHTML &&
                board[i+1].innerHTML == board[i+2].innerHTML &&
                board[i].innerHTML != ""){
                    won = true;
                    break;
                }
        }
    
        for(let i = 0; i<3; i++){
            if(board[i].innerHTML == board[i+3].innerHTML &&
                board[i+3].innerHTML == board[i+6].innerHTML &&
                board[i].innerHTML != ""){
                    won = true;
                    break;
                }
        }
    
        if(board[0].innerHTML == board[4].innerHTML &&
            board[4].innerHTML == board[8].innerHTML &&
            board[0].innerHTML != ""){
                won = true;
            } else if(board[2].innerHTML == board[4].innerHTML &&
                board[4].innerHTML == board[6].innerHTML &&
                board[2].innerHTML != ""){
                    won = true;
                }
    }


    for (let i=0; i<9; i++){
        boardObjectPrefab.push("");
        let boardObject = document.createElement("div");
        boardObject.textContent = boardObjectPrefab[i];
        boardObject.setAttribute("class", "gameboard_item");
        boardObject.setAttribute("id", i);
        boardObject.addEventListener("click", (e) =>{
            if (boardObject.textContent == "" &&
            turn == 0 &&
            won == false){
                boardObject.textContent = player1.getSign();
                turn++;
                turn = turn % 2;
                isWin();
                if (won == false){
                    thisTurn.textContent = player2.getName() + " turn";
                } else {
                    thisTurn.textContent = player1.getName() + " won";
                }
                
            } else if (boardObject.textContent == "" &&
            turn == 1 &&
            won == false){
                boardObject.textContent = player2.getSign();
                turn++;
                turn = turn % 2;
                isWin();
                if (won == false){
                    thisTurn.textContent = player1.getName() + " turn";
                } else {
                    thisTurn.textContent = player2.getName() + " won";
                }
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

setGameBoard();