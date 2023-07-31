//ES9 Obj spreed
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}
const url = ['https://swapi.co/api/people/1']

const { tiger, ...rest } = animals;
// console.log(rest);
// console.log(tiger);

// Promise.all(url.map(url => {
//     return fetch(url).then(people => people.json());
// })).then(array => {
//     console.log('1', array[0]);
//     console.log('2', array[1]);
//     console.log('3', array[2]);
//     console.log('4', array[3]);
// }).catch(err => console.log('ohhhhh fix it', err)).finally(F => {
//     console.log("Sorry :(", F);
// })


//for await of 
async function getData() {
    const arrayOfPromises = url.map(url => fetch(url));
    for await (let req of arrayOfPromises) {
        const data = await req.json();
        console.log(data);
    }
}