// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation.
// Print the affirmation to the console multiple times using a method

let sent = "By any means necessary "

// console.log(sent.repeat(3))

// function returnAffirm(msg,num) {
//     sum = 0
//     while (sum < num) {
//     sum ++
//     console.log(msg)
//     }
// }

// returnAffirm(sent,3)


//Declare a variable, assign it an array of letters, combine the letters into
// one word, and alert it 

let array = ['A','B','C','D']

// console.log(array.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as
// randomly as possible

function randomAsFuck() {
    let random = Math.random()

    if (random < .20) {
        return 'Rock'
    } else if (random < .40) {
        return 'Paper'
    } else if (random < .60) {
        return 'Lizard'
    } else if (random < .80) {
        return 'Spock'
    } else {
        return 'Scissors'
    }
}

function printer(num) {
    sum = 0
    while (sum < num) {
    sum ++
    // console.log(msg)
    console.log(randomAsFuck())
    }
}
printer(3)

// console.log(printer())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, 
//or spock) and determines if they won a game of rock paper scissors agains
//t a bot using the above function


