//Create a function that takes in an array of 
//numbers. Multiply each number together and alert 
//the product. 

function helloWorld(arr) {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i]        
    }
    console.log(multiply)
}



helloWorld([10,2,3])