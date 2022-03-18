//Create a stopwatch object that has
// four properties and three methods

const stopwatch = {
    material: 'stainless steel',
    color: 'silver',
    weight: '2.3 pounds',
    price: 500,
    style: function () {
         return this.materal + 'and' + this.color
        },
    increase: function () {
        return this.price + 100;
    }, 
    decrease: function () {
        return this.price - 100;
    }
    }


console.log(stopwatch.increase)