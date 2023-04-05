// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    /*attack() {
        return this.strength
    }*/ //put the methods only when have changes? or its a good practice to put always? since inheritance is for attributes and methods
    receiveDamage(damage) {
        this.health = this.health - damage 
         if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
         } else {
             return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier { 
    constructor(health, strength) {
        super(health,strength);
    }
receiveDamage(damage) {
    this.health = this.health - damage 
     if (this.health > 0) {
         return `A Saxon has received ${damage} points of damage`
     } else {
         return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    constructor() {
    }
    vikingArmy = []
    saxonArmy = []
addViking(viking) {
    this.vikingArmy.unshift(viking) //why put this.??
}
addSaxon(saxon) {
    this.saxonArmy.unshift(saxon)
}
vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
//Saxon receiveDamage() equal to the strength of a Viking should remove dead Saxons from the army
    this.receiveDamage(randomSaxon) = this.attack(randomViking)
    this.saxonArmy.shift()
    //return `Saxon has ${this.damage.saxon} of damage and Viking has ${this.strength.viking} of strength`
}
saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    //Viking receiveDamage() equal to the strength of a Saxon
    this.saxonArmy.shift()
    //return `Viking has ${this.damage.viking} of damage and Saxon has ${this.strength.saxon} of strength`
}
showStatus() {
    if(this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!'
    }
    if(this.vikingArmy.length === 0) {
       return 'Saxons have fought for their lives and survived another day...'
    }
    if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}
}
