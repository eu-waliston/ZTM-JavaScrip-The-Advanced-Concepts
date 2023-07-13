// More Constructor Functions

function Elf(name, weapon) {
  this.name = name,
  this.weapon = weapon
}

Elf.prototype.attack = function () {
  return `Attack with ${this.weapon}`;
};

const peter = new Elf("Peter", "Fire Bolt");
console.log(peter.__proto__);
console.log(peter.prototype);
console.log(peter.weapon);
