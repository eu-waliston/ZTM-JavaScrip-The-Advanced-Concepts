//Parallel, Sequence, Race

const promestfy = (item, delay) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(item, delay);
    })
})

const a = () => promestfy('A', 100);
const b = () => promestfy('B', 5000);
const c = () => promestfy('C', 3000);

// console.log(a(), b(), c());

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);

    return `parallel is done: ${output1} ${output2} ${output3}`
}

// parallel().then(console.log)

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`
}

// race().then(console.log)


async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();

    return `sequence id done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
sequence().then(console.log)
race().then(console.log)