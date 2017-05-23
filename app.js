"use strict";

const gamePieces = targetClassName('game-piece');

const recursiveIcons = recursiveRandomIcons(allCodes, 12);
console.log(recursiveIcons);


printInnerHTML(gamePieces, recursiveIcons, 0)


