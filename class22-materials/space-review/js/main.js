//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [40,20,70,30,50]

// current value added to acc - start at 0

let sum = nums.reduce((acc,c) => acc+c , 0)



console.log(sum)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let numstwo = [40,20,70,30,50]

// let numSquared = numstwo.map( x => x*x)

function squareNums(arr) {
    return arr.map(n => n*n)
}

console.log(squareNums([5,10,15,20]))

// console.log(numSquared)




//Create a function that takes string
//Print the reverse of that string to the console

function reverseStr(str){
    //.split turns string into an array
    //.reverse reverses array
    //.join combines the array into a string
    let reverseStr = str.split('').reverse().join('')
    console.log(reverseStr)
}

reverseStr('hello my people')

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(string){
    let backwards = string.split('').reverse().join('');
    if (string.toLowerCase() === backwards.toLowerCase()) {
        console.log('Yes')
    } else {
        console.log('Nos')
    }
}

palindrome('terrarret')


const isPalindrome = s => s === s.split('').reverse().join('')
    ? console.log('Yes') : console.log('No')


    isPalindrome('tacocat')