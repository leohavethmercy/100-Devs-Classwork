//Create a Tony Hawk Pro Skater constructor that
// makes fighting game characters with 
//4 properties and 3 methods

function Skater(push,move,chStance,name) {
    this.skate = push,
    this.specialMove = move,
    this.stance = chStance,
    this.name = name,
    this.ollie = function() {
        return `${this.name} just Ollied!`
    },
    this.kickflip = function() {
        return `${this.name} just Kickflipped!`
    },
    this.nollie = function() {
        return `${this.name} just Nollied`
    }


}

let Beasely = new Skater('Hard','Tre flip','lean','Beasely')

console.log(Beasely.kickflip())