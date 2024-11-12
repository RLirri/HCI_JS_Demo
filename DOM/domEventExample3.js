//Example 3: mouseOver and mouseOut
//1. Select a paragraph element by tag
var paragraph = document.querySelector("p");

//2. SETUP MOUSE OVER LISTENER
paragraph.addEventListener("mouseover", function() {
    paragraph.textContent = "Stop hovering over me!";
});

//3. SETUP MOUSE OUT LISTENER
paragraph.addEventListener("mouseout", function() {
    paragraph.textContent = "Phew, thank you for leaving me alone";
});

