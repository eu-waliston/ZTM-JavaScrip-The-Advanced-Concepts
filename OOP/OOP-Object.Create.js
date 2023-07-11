//Object.create()

const elfFunctions = {
  attack() {
    return console.log(`Attack with ${this.weapon}`);
  },
};

function createElf(name, weapon) {
  let newelf = Object.create(elfFunctions);
  newelf.name = name;
  newelf.weapon = weapon;
  return newelf;
}

const peter = createElf("Peter", "Fire");
peter.attack();

