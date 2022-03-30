// *Variables*
// Declare a variable and assign it to a sentance
// as a string. Alert if the sentance is a question

let newVar = "What is the problem?"

if (newVar.split('').pop() == '?') {
    console.log(newVar)
}

//could also use .endsWith() method which returns true or false
//if string ends with given parameter
console.log(newVar.endsWith('?'))

// console.log(newVar.split('').pop())

//Declare a variable, assign it a string of multiple words,
    // replace every "jr. dev" with "software engineer", and 
        //print it to the console

        let otherVar = "I am looking for jr. dev positions"
        //replace all method takes 2 arguments, item and replacer
        console.log(otherVar.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or 
    //scissors as randomly as possible

function rockPaperSciss() {
    let random = Math.random()
    if (random <= .33) {
        return 'Rock'
    } else if (random <= .66) {
        return 'Paper'
    } else {
            return 'Scissors'
        }
    }

console.log(rockPaperSciss())

// *Conditionals*
//Create a function that takes in a choice 
//(rock, paper, or scissors) and determines if they won a 
//game of rock paper scissors against a bot using the 
//above function

function choice(which) {
    let botChoice = rockPaperSciss()
    if ((which.toLowerCase() == 'scissors') && (botChoice == 'Paper') || 
    ((which.toLowerCase() == 'rock') && (botChoice == 'Scissors')) || 
    ((which.toLowerCase() == 'paper') && (botChoice == 'Rock'))) {
        return 'You win'
    } else if  (which.toLowerCase() == botChoice) {
        return 'Its a tie!'
    } else {
        return 'You lost!'
    }
}

console.log(choice('Scissors'))

//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices 
//in the array. Print the results of each game to the console.

