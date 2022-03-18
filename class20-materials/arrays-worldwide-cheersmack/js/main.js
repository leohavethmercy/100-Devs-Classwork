//Create a function that takes in a number.
 // The function should return an array that 
 //contains every number from 1 to that number 
 //as seperate elements


 function newArray(num) {
     let theArray = []
     for (let index = 0; index <= num; index++) {
         theArray[index] = index
     }
     return theArray
 }

 console.log(newArray(10))