const promiseOne = new Promise((resolve, rejects) => {
    setTimeout(resolve, 3000)
})

const promiseTwo = new Promise((resolve, rejects) => {
    setTimeout(rejects, 3000)
})

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e));
 


