/*https://www.w3schools.com/jsref/jsref_reduce.asp
 **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 **The reduce() method executes a reducer function for array element.
 **The reduce() method returns a single value: the function's accumulated result.
 **The reduce() method does not execute the function for empty array elements.
 **The reduce() method does not change the original array.*/
/*The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add. */

// Array of prices
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// Using reduce to calculate the total price
const total = prices.reduce((total, price) => total + price); // Accumulate the sum of prices

// Using reduce to find the minimum price
const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

console.log(minPrice); //print the minimum price

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// Question 1: Using reduce to find the highest rated movie
// Update bestMovie if the current movie has a higher score
// Otherwise, keep the current best movie
const bestMovie = movies.reduce((highest, movie) => {
  return movie.score > highest.score ? movie : highest;
});

//Question 2: Output the highest rated movie
// Output: { title: 'Amadeus', score: 99, year: 1984 }
