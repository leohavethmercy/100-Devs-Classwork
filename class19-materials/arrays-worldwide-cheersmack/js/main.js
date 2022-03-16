//Create a function that takes in a number.
// The function should return an array that 
//contains every number from 1 to that number
// as seperate elements


let newArray = []

// function newNumber(x) {
//     for (let i = 0; i <= x+10; i++) {
//         // newArray.push(i);
//         newArray[i] = i;    
//     }
//     return newArray
// }


let newNumber = (x) => {
    for (let i = 0; i <= x; i++) {
        newArray[i] = i;
    }
    return newArray
}

console.log(newNumber(10))

// newArray.forEach((x,i) => {
//     newArray[i]
// });

// console.log(newArray)