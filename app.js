"use strict";

//returns the NodeList w/ the passed class name
const gamePieces = returnCardElements('game-piece');

//returns a randomly selected batch of icon unicodes
const selectedIcons = returnRandomIcons(allCodes, gamePieces.length/2);

//duplicates the randim icons, concats the arrays to create pairs and shuffles the whole deck
const shuffledIconPairs = pairAndShuffle(selectedIcons);

//console.log(shuffledIconPairs);

//sets the inner HTML of each gamePiece to an icon based on the shuffled deck
printInnerHTML(gamePieces, shuffledIconPairs)


