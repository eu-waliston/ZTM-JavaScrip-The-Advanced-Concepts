// function a() {
//   let grandpa = "grandpa";
//   return function b() {
//     let father = "farther";
//     return function c() {
//       let son = "son";
//       return `${grandpa} >> ${father} >> ${son}`;
//     };
//   };
// }

// console.log(a()()());;

function boom(string) {
  return function (name) {
    return function (name2) {
      console.log(`${string} ${name} ${name2}`);
    };
  };
}

boom('wal')('is')('ton')

