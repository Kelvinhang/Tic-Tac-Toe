function setGameBoard() {
    const boardObjectPrefab = new Array;
    const player1 = player("player1","O");
    const player2 = player("player2","X");
    const gameBoard = document.querySelector(".gameboard")
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
                turn = turn%2;
            } else if (boardObject.textContent == "" &&
            turn == 1){
                boardObject.textContent = player2.getSign();
                turn++;
                turn = turn%2;
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