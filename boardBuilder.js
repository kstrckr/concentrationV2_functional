"use strict";


const buildBoard = (parentId, width, height) => {
    let board = document.getElementById(parentId);

    let boardFragment = document.createDocumentFragment();

    function buildRows (target, width, height){
        if (height === 0){
            return;
        }
        let newRow = document.createElement("div");
        newRow.className = "game-board-row";

        //add columns here
        function addColumns(width){
            if (width === 0){
                return;
            }
            let newGamePiece = document.createElement("div");
            newGamePiece.classList.add("game-piece", "fa", "fa-5x");
            newGamePiece.dataset.status = "unselected";
            newRow.appendChild(newGamePiece);
            addColumns(width - 1)
        }


        addColumns(width);
        
        target.appendChild(newRow);
        buildRows(target, width, height -1);
    }

    
    buildRows(boardFragment, width, height);

    board.appendChild(boardFragment);


}