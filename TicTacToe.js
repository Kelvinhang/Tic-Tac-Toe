function setGameBoard() {
    const boardObjectPrefab = new Array;
    const gameBoard = document.querySelector(".gameboard")
    for (let i=0; i<8; i++){
        boardObjectPrefab.push("");
    }

    for (let i=0; i<=boardObjectPrefab.length; i++){
        let boardObject = document.createElement("div");
        boardObject.textContent = boardObjectPrefab[i];
        boardObject.setAttribute("class", "gameboard_item");
        boardObject.setAttribute("id", i);

        gameBoard.appendChild(boardObject);
    }
}

setGameBoard();