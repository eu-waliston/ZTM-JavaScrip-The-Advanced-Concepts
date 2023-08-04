//Errors In JavaScript
const myError = new Error("oopise");
// console.log(myError.stack);
function a() {
  const b = new Error("what");
  return b;
}


a();

new SyntaxError

new ReferenceError