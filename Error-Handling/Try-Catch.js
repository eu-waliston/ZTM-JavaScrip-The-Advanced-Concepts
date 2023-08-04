// function fail() {
//   try {
//     console.log("this works");
//     throw new Error("Ooopise");
//   } catch (error) {
//     console.log("we have made an oopsie", error);
//   } finally {
//     console.log("we Run!");
//     return 'return fail'
//   }

//   console.log('!!!!!');
// }

// fail();

// try {
//     try {
//         something();
//     } catch (error) {
//         throw new Error(error)
//     }
// } catch (error) {
//     console.log('got it', error);
// }

try {
  setTimeout(function () {
    fakevariable;
  }, 1000);
} catch (e) {
  console.log("git it", e);
}
