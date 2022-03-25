//Create a mouse object that has 
//four properties and three methods

let mouse = {
    color: 'black',
    weight: 5,
    height: 1,
    speed: 'fast',
    getColor: function() {
        console.log(`The mouse color is: ${this.color}`)
    },
    getWeight: function() {
        console.log(`the mouse weight is ${this.weight}`)
    },
    getSpeed: function() {
        console.log(`the mouse is ${this.speed}`)
    }
}

mouse.getColor()
mouse.getWeight()
mouse.getSpeed()

