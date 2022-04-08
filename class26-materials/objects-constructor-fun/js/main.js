//Create a constructor with 4 properties and 3 methods

function MakePizza(pizzaSize,pizzaCrust,pizzaCheese,pizzaToppings) {
    this.size = pizzaSize
    this.crust = pizzaCrust
    this.cheese = pizzaCheese
    this.toppings = pizzaToppings

    this.burn = function() {
        console.log(`!!!! THIS ${this.size} ${this.crust} ${this.toppings} PIZZA IS HOT`)
    }
    this.whatTopp = function() {
        console.log(`!!! THIS PIZZA HAS TOO MUCH ${this.toppings} `)
    }
    this.fall = function() {
        console.log(`OH NO MY ${this.size} PIZZA FELL`)
    }
}

let goodPizza = new MakePizza('small','thin crust','extra cheese','pepperoni')

goodPizza.burn()
goodPizza.whatTopp()
goodPizza.fall()

//New ECMA syntax

class MakeShoe{
    constructor(shoeBrand,shoeStyle,shoeColor,shoePrice) {
        this.brand = shoeBrand
        this.style = shoeStyle
        this.color = shoeColor
        this.price = shoePrice
    }
    buy() {
        console.log(`You just bought a pair of ${this.brand} ${this.style} shoes for $${this.price}`)
    }
}

let firstPair = new MakeShoe('Yeezy','350','Waverunners',220)

firstPair.buy()