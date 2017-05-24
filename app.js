"use strict";

const gamePieces = returnCardElements('game-piece');

const selectedIcons = recursiveRandomIcons(allCodes, 12);
console.log(selectedIcons);


printInnerHTML(gamePieces, selectedIcons, 0)


