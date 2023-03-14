const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MINIMUM_AGE = 0;
const LOW_FITNESS = 3;
const HIGH_HUNGER = 5;


function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = []
};

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;}
}

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } 
    
    if (this.hunger - 3 > MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } 
    
    if (this.fitness <= LOW_FITNESS && this.hunger <= HIGH_HUNGER) {
        return ("I need a walk");
    } else if (this.hunger >= HIGH_HUNGER && this.fitness >= LOW_FITNESS){
        return ("I am hungry");
    } else if (this.fitness <= LOW_FITNESS && this.hunger >= HIGH_HUNGER){
        return ("I am hungry AND I need a walk");
    } else return ("I feel great!");
}

Pet.prototype.adoptChild = function (child) {
    this.children.push(child);
    return child;
  }

module.exports = Pet;