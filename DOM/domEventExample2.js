//Example 2: Clicking on a button to rewrite text
//1. Select a button and a paragraph elements by tags
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//2. Add an event listener
button.addEventListener("click", changeText);

function changeText(){
    paragraph.textContent = "Someone Clicked the Button!";
}


