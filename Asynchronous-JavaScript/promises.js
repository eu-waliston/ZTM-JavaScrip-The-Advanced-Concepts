//Promises
const promise = new Promise((resolve, reject) => {
    true ? resolve('Stuff Worked') : resolve('Work Rejected');
})

const promise2 = new Promise((resolve, rejected) => {
    (resolve, rejected) => {
        setTimeout(resolve, 100, 'HITII')
    }
})
const promise3 = new Promise((resolve, rejected) => {
    (resolve, rejected) => {
        setTimeout(resolve, 1000, 'POOKIE')
    }
})
const promise4 = new Promise((resolve, rejected) => {
    (resolve, rejected) => {
        setTimeout(resolve, 5000, 'It is me you are looking for ? ')
    }
})

console.log(promise.then(result => result + '!').then(result => console.log(result)));

console.log("____________________________");

const URLS = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
]


Promise.all(URLS.map(url => {
    return fetch(url).then(res => {
        res.json()
    })
})).then(result => {
    console.log(result[0])
    console.log(result[1])
    console.log(result[2])
})