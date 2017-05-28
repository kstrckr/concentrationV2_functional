"use strict";
const gamePieceClassNames = ["game-piece", "fa", "fa-5x"];

const addColumns = (target, width, classNames) => {
            if (width === 0){
                return;
            }
            let newGamePiece = document.createElement("div");

            classNames.forEach(function(element){
                newGamePiece.classList.add(element);
            })
            
            newGamePiece.dataset.status = "unselected";
            target.appendChild(newGamePiece);
            addColumns(target, width - 1, classNames)
        }

const buildBoard = (parentId, width, height, rowClassName) => {
    let board = document.getElementById(parentId);

    let boardFragment = document.createDocumentFragment();

    function buildRows (target, width, height, rowClassName){
        if (height === 0){
            return;
        }
        let newRow = document.createElement("div");
        newRow.className = rowClassName;

        addColumns(newRow, width, gamePieceClassNames);
        
        target.appendChild(newRow);
        buildRows(target, width, height -1, rowClassName);
    }

    
    buildRows(boardFragment, width, height, rowClassName);

    board.appendChild(boardFragment);


}