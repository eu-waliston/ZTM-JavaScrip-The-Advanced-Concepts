// Object.create() vs Class

class Elf{
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return `${this.name} attack with ${this.weapon}`;
    }

}

Object.create();

const peter = new Elf('Peter', "Ice Storm")
console.log(peter.attack());