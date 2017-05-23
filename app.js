"use strict";

const gamePieces = targetClassName('game-piece');

const randomIcons = buildRandomArray(allCodes, 6, []);

printInnerHTML(gamePieces, randomIcons, 0);
