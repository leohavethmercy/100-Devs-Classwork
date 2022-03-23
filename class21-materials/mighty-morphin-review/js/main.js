// *Variables*
// Declare a variable, reassign it to your fav holiday, 
//make sure it is in all caps, and print the value to the console

let holiday = "christmas"

let favHoliday = holiday.toUpperCase()

console.log(favHoliday)

//Declare a variable, assign it a string, alert the 
//last three characters in the string (Use your google-fu and the MDN)

let stringVar = 'String Variable'


console.log(stringVar.slice(stringVar.length-3))

// better solution
// console.log(stringVar.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. 
//Subtract all five from 100. Alert the absolute value of the 
// difference. Call the function.

function numbers(x,y,z,a,b,c) {
    // let diff = 0
    // diff = Number(100 - (x+y+z+a+b+c))
    // console.log(diff)

    let diff = 100 - x - y - z - a - b -c;
    console.log(Math.abs(diff));

}

numbers(1,44,2,17,5,9)

// Create a function that takes in 3 numbers. 
//Console log lowest and highest values. Call the function.

function random(a,b,c) {
    let high = Math.max(a,b,c)
    let low = Math.min(a,b,c)

    console.log(high)
    console.log(low)
}
random(1,2,3)

// *Conditionals*
//Create a function that returns heads or tails 
//randomly and as fairly as possible. Call the function.

let headsor = () => {
    //math.random == 0-1 but does not include one
    let coin = Math.random();
    if (coin < .5) {
        return 'heads'
    } else {
        return 'tails'
    }
}

// console.log(headsor())

const tailsor = () => Math.random() < .5 ? 'tails' : 'headssss'

console.log(tailsor())

//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous
// function x times where x is the number passed into the function.
// Call the function.

function takesin(number) {
    for (let i = 0; i <= number; i++) {
        console.log(headsor())        
    }
}

// takesin(3)