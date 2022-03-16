//Create an array of movies with at least three movies.

//literal notation
let movies = ['Goodfellas','Malcolm X','Never Back Down']
// console.log(movies)
//Using the array from above, store the first movie in a variable

let firstMovie = movies[0]
// console.log(firstMovie)
//Get the length of the original array and store it in a new variable

let moviesLength = movies.length
// console.log(moviesLength)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastMovie = movies.pop()
// console.log(lastMovie)

let bestColors = ['green', 'blue', 'yellow', 'black']

bestColors.forEach( (x,i) => console.log(x + bestColors[i+1]))