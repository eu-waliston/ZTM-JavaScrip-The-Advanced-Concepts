//Constructor Function
function Elf(name, weapon) {
  (this.name = name), (this.weapon = weapon);
}

Elf.prototype.attack = function() {
    return `Attack with ${this.weapon}`
}

const peter = new Elf("Peter", "Fire Bolt");
console.log(peter.attack());
