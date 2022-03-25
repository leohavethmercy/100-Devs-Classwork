//Create a street fighter 
//constructor that makes fighting 
//game characters with 4 properties
// and 3 methods

//constructor has CamelCase
function FighterChar(name,health,kick,punch,regen) {
    this.name = name
    this.health = health
    this.kickstrength = kick 
    this.punchstrength = punch
    this.regen = regen
    this.kick = function() {
        console.log(`You kicked opponent and dealt ${this.kickstrength} damage`)
    }
    this.heal = function() {
        console.log(`You just healed your self ${this.regen} HP`)

    }
    this.punch = function() {
        console.log(`You punched opponent and dealt ${this.punchstrength} damage`)

    }
}

let Ryu = new FighterChar('Ryu',100,15,20,10)
Ryu.kick()
Ryu.heal()
Ryu.punch()