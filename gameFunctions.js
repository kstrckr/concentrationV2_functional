const targetClassName = (target) => {
    let targetClass = document.getElementsByClassName("game-piece")
    return targetClass;
}

 const printInnerHTML = (elements, start, end) => {
     if (start === end){
         return null;
     } else {
         elements[start].innerHTML = "<p>Content!</p>";
         start++;
         printInnerHTML(elements, start, end);
     }
 }