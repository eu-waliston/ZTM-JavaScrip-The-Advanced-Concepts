function sayMyName() {
  let a = "a";
  return function findMyName() {
    let b = "b";
    return function printName() {
      let c = "c";
      return "We Santos";
    };
  };
}
