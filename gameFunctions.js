"use strict";

//returns the NodeList w/ the passed class name
const returnCardElements = target => document.getElementsByClassName(target);

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
         elements[start].dataset.status = "unselected";
         elements[start].innerHTML = `<p>${contentArr[start]}</p>`;
         start++;
         printInnerHTML(elements, contentArr, start);
     }
 }

const matchCheck = function(clickTarget){
    let selectedPieces = document.querySelectorAll('[data-status="selected"]');
    console.log(selectedPieces);
    if (selectedPieces.length < 2){
        return;
    } else if (selectedPieces.length === 2){
        if (selectedPieces[0].dataset.icon === selectedPieces[1].dataset.icon) {
            console.log("Match!");
            selectedPieces.forEach(function(element){
                element.dataset.status = "matched";
            })
        }
    } else if (selectedPieces.length > 2) {
        selectedPieces.forEach(function(element){
            console.log(element);
            element.firstChild.style.visibility = "hidden";
            element.dataset.status = "unselected";
        });
        clickTarget.firstChild.style.visibility = "visible";
        clickTarget.dataset.status = "selected";
    }
}