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
         elements[start].innerHTML = `<p>${contentArr[start]}</p>`;
         start++;
         printInnerHTML(elements, contentArr, start);
     }
 }


