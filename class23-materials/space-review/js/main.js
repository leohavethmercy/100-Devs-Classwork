//Arrays

//Create and array of numbers.
// Sum all of the numbers. Alert the sum.

let newArr = [5,3,55,3,22,1,12,2]
let sum = 0
newArr.forEach(x => {
    sum += x
});
console.log(sum)

// .reduce method
let summed = newArr.reduce( (acc,c) => acc + c) 
console.log(summed)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original 
//number squared

function squared(array) {
    return array.map(x => x**2)
}

console.log(squared(newArr))

//Create a function that takes string
//Print the reverse of that string to the console

function reversed(string) {
     return string.split('').reverse().join('')
}

console.log(reversed('hello bobby whats up'))


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = strings => strings == strings.split('').reverse().join('')

console.log(palindromeCheck('tacocat'))