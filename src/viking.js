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
        this.vikingArmy = []
        this.saxonArmy = []
    }
addViking(viking) {
    this.vikingArmy.push(viking)
}
addSaxon(saxon) {
    this.saxonArmy.push(saxon)
}
vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let finalVikingAttack = randomSaxon.receiveDamage(randomViking.strength)
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1)
    }
    return finalVikingAttack
}
saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let finalSaxonAttack = randomViking.receiveDamage(randomSaxon.strength)
    if (randomViking.health <=0) {
        this.vikingArmy.splice(randomVikingIndex, 1)
    }
    return finalSaxonAttack
}

genericAttack(attackingArmy, defendingArmy) {
    const randomAttacker = Math.floor(Math.random() * this.attackingArmy.length);
    const randomDefender  = Math.floor(Math.random() * this.defendingArmy.length);
    const attacker = attackingArmy[randomAttacker];
    const defender = defendingArmy[randomDefender];
    const damage = attacker.strength;
    const result = defender.receiveDamage(damage);

if(defender.health <= 0){
    defendingArmy.splice(randomDefender, 1)
    }
    return result
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
