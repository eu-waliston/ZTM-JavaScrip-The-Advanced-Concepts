// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack(){
//         return 'attack with ' + elf.weapon
//     }
// }

//Factory Functions
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack(){
        return `Attack with ${weapon}`
    }
  };
}


