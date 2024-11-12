//Example 1: use getAttribute() and setAttribute() for link element
//1. Select <a> tag
var link = document.querySelector("a");
//2. Retrieve the HREF attribute of link element
console.log(link.getAttribute("href"));
//3. Change HREF attribute of link element
link.setAttribute("href","https://www.petsmart.com/");

//Example 2: use setAttribute() to change IMAGE element
//1. Select <img> tag
var img = document.querySelector("img");
//2. Retrieve the HREF attribute of link element
console.log(img.getAttribute("src"));
//3. Change SRC attribute of img element
img.setAttribute("src","images/corgi.png");