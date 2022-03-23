//Arrays

//Create and array of tv shows. 
//Loop through and print each show to the console

let tvShows = ['Chappelle','MTV','VH1']

tvShows.forEach((x) => console.log(x))

//Create and array of numbers
//Return a new array of numbers that includes every even
// number from the previous Arrays

let numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.forEach(x =>)

// let newNumbers = []

// numbers.map(x => {
//     if (x % 2 == 0){
//         newNumbers.push(x)
//     }
// })

// console.log(newNumbers)

// .filter checks if true -- if true it includes in new array
// implicit return - returned to where its called
let newNumbers = arr => arr.filter(x => x%2 == 0)
console.log(newNumbers(numbers))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function someNums(arr) {
    //sorting numbers in an array -> small to high
   let sorted = arr.sort((a,b) => a-b)
   let min = sorted[1]
   let max = sorted[sorted.length-2]
   return min + max
}

console.log(someNums([1,2,3,4,5,6,7]))