//https://www.w3schools.com/js/js_maps.asp
//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.

// Array of numbers from 1 to 20
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// Using map to create a new array with each number doubled
const doubles = numbers.map(function (num) {
  return num * 2; // Return double the value of num
});

// Output the array of doubled numbers
console.log(doubles);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

// Array of movie objects with title and score properties
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// Question 1: Using map to create a new array of movie titles in uppercase
// Convert the title to uppercase
const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

//  Question 2: Output the array of movie titles
// Output: ['AMADEUS', 'STAND BY ME', 'PARASITE', 'ALIEN']
