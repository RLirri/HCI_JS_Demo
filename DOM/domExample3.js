//Example 1:
//1. Select an element by id
var tag = document.querySelector("#highlight");
//2. Manipulate - ADD A NEW CSS CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");

//Example 2:
//1. Select an element by tag 
var tag2 = document.querySelector("h1");
//2. Manipulate - ADD A NEW CSS CLASS TO THE SELECTED ELEMENT
tag2.classList.add("another-class");

//Example 3:
//1. Select an element by tag 
var tag3 = document.querySelector(".bolded");
//2. Manipulate - toggle A NEW CSS CLASS TO THE SELECTED ELEMENT
a = tag3.classList.toggle("third-class");
console.log(a);  //return true because class was added