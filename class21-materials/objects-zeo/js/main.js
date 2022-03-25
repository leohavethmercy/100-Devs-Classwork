//Create a stopwatch object that 
//has four properties and three methods


let stopwatch = {
    color: 'blue',
    weight: 1.5,
    material: 'Gold',
    currentTime: 4,
    watchColor: function () {
        console.log( `The watch color is ${this.color}`)
    },
    watchWeight: function () {
        console.log(`The watch weight is ${this.weight}`)
    },
    watchMaterial: function () {
        return `The watch material is ${this.material}`
    },
    tellTime: function() {
        return `The current time is: ${this.currentTime}`
    }
}

stopwatch.watchWeight()
stopwatch.watchColor()
console.log(stopwatch.watchMaterial())
console.log(stopwatch.tellTime())
