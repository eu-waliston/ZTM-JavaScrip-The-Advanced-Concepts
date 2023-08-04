// //Strings and Arrays

// EX 1
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}
// reverse("waliston");

// EX 2
function mergedSortedArrays(arr1, arr2) {
  const fullArr = [];
  let new1 = arr1;
  let new2 = arr2;

  let final = fullArr.concat(new1, new2);

  final.sort((a, b) => {
    return a - b;
  });

  return console.log(final);
}

mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]);
