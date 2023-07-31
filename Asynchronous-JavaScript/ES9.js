//ES9 Obj spreed
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, ...rest} = animals;
console.log(rest);
console.log(tiger);