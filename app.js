"use strict";

buildBoard("game-board", 4, 4, "game-board-row");


//returns the NodeList w/ the passed class name
const gamePieces = returnCardElements('game-piece');

//initialize MatchesRemaining number
const initialMatchesRemaining = initilizeMatchesRemaining(document.getElementById("matchesRemainingNum"), gamePieces.length/2);

//returns a randomly selected batch of icon unicodes
const selectedIcons = returnRandomIcons(allCodes, gamePieces.length/2);

//duplicates the randim icons, concats the arrays to create pairs and shuffles the whole deck
const shuffledIconPairs = pairAndShuffle(selectedIcons);

console.log(shuffledIconPairs);

//sets the inner HTML of each gamePiece to an icon based on the shuffled deck
printInnerHTML(gamePieces, shuffledIconPairs)

document.getElementById("game-board").addEventListener('click', function(e){
    if (e.target.classList.contains("game-piece") && e.target.dataset.status !== "matched" && e.target.dataset.status !== "selected"){
    e.target.firstChild.style.visibility = "visible"
    e.target.dataset.status = "selected"
    matchCheck(e.target, document.getElementById("movesCountNum"), document.getElementById("matchesRemainingNum"));
    } else {
        return null;
    }
    
});

