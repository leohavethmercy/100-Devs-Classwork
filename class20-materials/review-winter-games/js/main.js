//Create a function that takes in an array of numbers.
// Return a new array containing every even number
// from the original array (do not use map or filter)

function winterGames(arr) {
    let newArr = [];
    arr.forEach((element) => {
        // if (element % 2 == 0) {
        //    newArr.push(element);
        // }
        (element % 2 == 0) ? newArr.push(element) : false
    })
    console.log(newArr)
}

winterGames([3,2,40,33,4,5,6,7,8,9,10])