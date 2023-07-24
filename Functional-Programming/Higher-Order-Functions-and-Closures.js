// Higher Order Functions and Closures

//HOF
const hof = () => () => 5;
hof(function a(x) {
  return x;
});
//Clouse
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return console.log(count);
  };
};
console.log(closure());