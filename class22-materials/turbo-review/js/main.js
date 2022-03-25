// *Variables*
// Declare a variable and assign it to your fav 
//drink as a string. Make sure there is no 
//whitespace on either side of the string, 
//and print the value to the console

//Declare a variable, 
//assign it a string of multiple words,
 //and check to see if one of the words is "apple".

// *Functions*
// Create a function that returns rock, paper, 
// or scissors as randomly as possible

function rockPaperScissors(){
    let random = Math.random()
    if ( random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return scissors
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


//this key word is assigned to variables passed in
function MakeCar(carMake,carModel,carColor,numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function() {
        console.log('BEEP BEEP FUCKER')
    }
    this.lock = function() {
        console.log(`You have just locked all ${this.doors} doors!`)
    }
}

//creates new object
//new object(passed in variables)
let hondaCivic = new MakeCar('honda','civi','black',2) 
console.log(hondaCivic.doors)
hondaCivic.honk()
hondaCivic.lock()


//making new car object named teslaRoadster
let teslaRoadster = new MakeCar('Tesla','Roadster','Black',2)
console.log(teslaRoadster.bluetooth)
//prototype - object used as a fallback source of properties
//makes new bluetooth property on MakeCar object
MakeCar.prototype.bluetooth = true
//
console.log(teslaRoadster.bluetooth)
console.log(teslaRoadster.doors)
console.log(teslaRoadster.doors.toString())
