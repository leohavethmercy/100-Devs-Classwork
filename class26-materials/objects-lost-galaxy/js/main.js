//Create a pizza object that has four properties 
//and three methods

//pizza object
let pizza = { }

//pizza properties
pizza.size = 'large'
pizza.toppings = ['pepperoni','sausuage','mushrooms']
pizza.crust = 'thin crust'
pizza.cheese = 'mozarella'

//pizza methods
pizza.estimatedDeliveryTime = function() {
    console.log('calculating...')
}
pizza.warmUp = function() {
    console.log('warming up your pizza')
}

pizza.burnMouth = function() {
    console.log('!!!!!!!!')
}


//object contructor
function MakePizza(pizzaSize,pizzaCrust,pizzaCheese,pizzaTop) {
    this.size = pizzaSize
    this.crust = pizzaCrust
    this.cheese = pizzaCheese
    this.toppings = pizzaTop

    this.burnMouth = function() {
        console.log(`!!!! THIS ${this.size} ${this.crust} ${this.toppings} PIZZA IS HOT`)
    }
}

//making a new objec
let secondPizza = new MakePizza('large','thin crust','extra cheese','pepperoni')

secondPizza.burnMouth()

// MakePizza.prototype.sauce = true
secondPizza.sauce = true

console.log(secondPizza.sauce)