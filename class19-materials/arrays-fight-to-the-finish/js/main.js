//Create an array of movie titles.
// Loop through the array and each element to the h2.

let movies = ['movie1','movie2','movie3','movie4']

// movies.forEach((i,x) => console.log(i + x))

for (let i = 0; i < movies.length; i++) {
    // document.querySelector('h2').innerText() += movies[i] 
}

//Create an array of numbers.
// Loop through the array and three to each number
// and replace the old number.

let numbers = [1,2,3,4,5]

numbers.forEach((i,x) => {
    numbers[x] += 3
})

console.log(numbers)

//Find the average of all the numbers from
// question three

let avg = 0
numbers.forEach((i) => {
    avg += i
})
console.log(avg)
console.log(avg/(numbers.length))