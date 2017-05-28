"use strict";

//returns the NodeList w/ the passed class name
const returnCardElements = target => document.getElementsByClassName(target);

//gets and initializes the "moves remaining" html text
const initilizeMatchesRemaining = (target, num) => target.textContent = num;

//generates a random number between 0 and a passed upper limit (num)
const returnRandomNum = num => Math.floor(Math.random()*num);

//picks randomly from an input array (arr) to create and return an array with a length = outputLength
const returnRandomIcons = function(arr, outputLength){
    let outputArray = [];

    function pushToOutput(arr, outputLength, output){
        if (outputLength === 0){
            return output;
        }
        output.push(arr[returnRandomNum(arr.length)]);
        outputLength--;
        return pushToOutput(arr, outputLength, output);
    }
    return pushToOutput(arr, outputLength, outputArray);
}

//concats an array (arr) and shuffles the deck
const pairAndShuffle = function(arr){
    let pair =  arr.concat(arr);
    return pair.sort(function(a, b){return 0.5 - Math.random()});
}

//the content of each element of a nodelist (elements) is filled in sequence by it's equivalent index of the contentArr array. 
//default start=0 and ends the recursion at elements.length
 const printInnerHTML = (elements, contentArr, start = 0) => {
     if (start === elements.length){
         return null;
     } else {
         elements[start].dataset.icon = contentArr[start];
         //elements[start].dataset.status = "unselected";
         elements[start].innerHTML = `<p>${contentArr[start]}</p>`;
         start++;
         printInnerHTML(elements, contentArr, start);
     }
 }

/*
match functionality uses a live nodelist populated by data-status="selected" elements
when the list is greater than 2 the list is reset and the "3rd click" sets the click target's data-status="selected" and the process repeats
matches are set to data-status="matched" and ignored by click event listener
*/
const matchCheck = function(clickTarget, movesMadeTarget, matchesRemainingTarget){
    let selectedPieces = document.querySelectorAll('[data-status="selected"]');
    let movesMade = parseInt(movesMadeTarget.textContent, 10);
    movesMadeTarget.textContent = movesMade + 1;
    console.log(movesMade);
    if (selectedPieces.length < 2){
        return;

    } else if (selectedPieces.length === 2){
        if (selectedPieces[0].dataset.icon === selectedPieces[1].dataset.icon) {
            console.log("Match!");
            let mathesRemaining = parseInt(matchesRemainingTarget.textContent, 10);
            matchesRemainingTarget.textContent = mathesRemaining - 1;
            selectedPieces.forEach(function(element){
                element.dataset.status = "matched";
            })
        }
    } else if (selectedPieces.length > 2) {
        selectedPieces.forEach(function(element){
            element.firstChild.style.visibility = "hidden";
            element.dataset.status = "unselected";
        });
        clickTarget.firstChild.style.visibility = "visible";
        clickTarget.dataset.status = "selected";
    }
}

/*
matchCheck can certainly be made dry-er
should click on a selected gamePiece reset the board to all unselected? Good strategy dictates you flip the unknown card before coming back to the known,
but current state FORCES that to be the next move, probably not ideal
*/