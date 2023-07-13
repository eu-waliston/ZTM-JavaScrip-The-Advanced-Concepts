//ES6 Classes

class Elf{
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return `${this.name} attack with ${this.weapon}`;
    }

}

const peter = new Elf('Peter', "Ice Storm")
console.log(peter.attack());