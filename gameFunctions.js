"use strict";

const returnCardElements = target => document.getElementsByClassName(target);

const returnRandomNum = num => Math.floor(Math.random()*num);

const pairAndShuffle = function(arr){
    let pair =  arr.concat(arr);
    return pair.sort(function(a, b){return 0.5 - Math.random()});
}

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

 const printInnerHTML = (elements, contentArr, start = 0) => {
     if (start === elements.length){
         return null;
     } else {
         elements[start].innerHTML = `<p>${contentArr[start]}</p>`;
         start++;
         printInnerHTML(elements, contentArr, start);
     }
 }


