// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let newVariable = "!="

console.log(newVariable)

// Declare a variable, reassign it to your favorite color, and console log the value

let newColor = 'blue'
console.log(newColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function addThree(a,b,c,d) {
    return (a+b+c)/d
}

addThree(1,2,3,4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

let addTwo = (a,b) => {
    return a ** b
}

// *Conditionals*
// Create a function that takes in a boolean and a string.
// If the boolean is true, alert the string. If the boolean is false,
// console log the string

function alerOrLog(a,b) {
    return a == true ? console.log(b) : console.log(b)
}

// const alerOrLog = (a,b) => 

//*Loops*
//Create a function that takes in a number. 
//Console log all values from 1 to that number, but if the number 
//is divisible by 3 log "fizz" instead of that number, 
//if the number is divisible by 5 log "buzz" instead of the number,
// and if the number is divisible by 3 and 5 log "fizzbuzz" instead 
//of that number

let fizzbuzz = (number) => {
    for (let i = 0; i <= number; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log('fizzbuzz')
        } else if (i % 3 == 0) {
            console.log('fizz')
        } else if (i % 5 == 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }     
    }
}

// console.log(fizzbuzz(50))

let fizzcuzz = (num) => {
    for (let i = 0; i < num; i++) {
        switch (true) {
            case (i % 5 == 0) && (i % 3 == 0):
                console.log('fizzcuzz')
                break;
            case (i % 3 ==0):
                console.log('fizz')
                break;
            case (i % 5 == 0):
                console.log('cuzz')
                break;
            default:
                console.log(i)
                break;
        } 
    }
}

// console.log(fizzcuzz(70))

//Declaring Arrays

let newArray = []
newArray = ['Zebra',true,1,true,4,32,5432,'none']

newArray.push('40')
console.log(newArray)