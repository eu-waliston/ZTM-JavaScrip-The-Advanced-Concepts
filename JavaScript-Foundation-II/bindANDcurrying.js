//function currying
function multiply(a,b) {
    let result = console.log(`${a} X ${b} = ${a * b}`);
    return result;
}

// multiply(7,8)
let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4));
