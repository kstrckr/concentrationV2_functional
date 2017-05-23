"use strict";

const targetClassName = target => document.getElementsByClassName(target)

const returnRandomNum = num => Math.floor(Math.random()*num);

const buildRandomArray = function (arr, outputLength, outputArr) {
    let randomReturn = returnRandomNum(arr.length);
    outputArr.push(arr[randomReturn]);
    if (outputLength === 0){
        console.log(outputArr);
        return outputArr;
    } else {
        outputLength--;
        buildRandomArray(arr, outputLength, outputArr);
    }
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

