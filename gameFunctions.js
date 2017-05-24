"use strict";

const returnCardElements = target => document.getElementsByClassName(target);

const returnRandomNum = num => Math.floor(Math.random()*num);

const recursiveRandomIcons = function(arr, length){
    let outputArray = [];

    function pickIcons(arr, length, output){
        if (length === 0){
            return output;
        }
        output.push(arr[Math.floor(Math.random()*arr.length)]);
        length--;
        return pickIcons(arr, length, output);
    }

    return pickIcons(arr, length, outputArray);

}

 const printInnerHTML = (elements, contentArr, start) => {
     if (start === elements.length){
         return null;
     } else {
         elements[start].innerHTML = `<p>${contentArr[start]}</p>`;
         start++;
         printInnerHTML(elements, contentArr, start);
     }
 }


