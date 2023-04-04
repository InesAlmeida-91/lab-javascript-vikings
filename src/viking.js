// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name;
    }
    /*attack() {
        return this.strength
    }*/ //put the methods only when have changes? or its a good practice to put always? since inheritance is for attributes and methods
    receiveDamage(theDamage) {
        this.health = this.health - theDamage 
         if (this.health > 0) {
            return `${this.name} has received ${this.health} points of damage`
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
receiveDamage(theDamage) {
    this.health = this.health - theDamage 
     if (this.health > 0) {
         return `A Saxon has received ${this.health} points of damage`
     } else {
         return 'A Saxon has died in combat'
        }
    }
}

// War
class War {}
