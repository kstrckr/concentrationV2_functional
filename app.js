"use strict";

const gamePieces = returnCardElements('game-piece');

const selectedIcons = returnRandomIcons(allCodes, gamePieces.length/2);

const shuffledIconPairs = pairAndShuffle(selectedIcons);

console.log(shuffledIconPairs);


printInnerHTML(gamePieces, shuffledIconPairs)


