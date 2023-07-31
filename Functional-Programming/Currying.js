// Currying

const multiply = (a, b) => a * b;

const curryMultiply = (a) => (b) => a * b

console.log(curryMultiply(4)(6));
