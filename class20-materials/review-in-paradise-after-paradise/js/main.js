// Create a function that takes in an array.
 //If the first number, is less than the last number,
  //alert "Hi". If the first number is greater than 
  //the last number, alert "Bye". If they are equal, 
  //alert "We close in an hour".

  function lightWork(arr) {
        if (arr[0] < arr[arr.length-1]) {
            console.log('hi')
        } else if (arr[0] > arr[arr.length-1]) {
            console.log('bye')
        } else if (arr[0] == arr[arr.length-1]) {
            console.log('we close in an hour')
        }
    }

    // heck2 = function(arr) { 
    //     (arr[0] < arr[arr.length-1]) ? alert("Hi") : 
    //     (arr[0] > arr[arr.length-1]) ? alert("Bye") : 
    //     alert("We close in an hour") }

    lightWork([3,1,3,4,56,22,3])