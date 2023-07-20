//no side effect

const array = [1, 2, 3];

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multtiplyBy2(arr) {
  return arr.map((item) => item * 2);
}


console.log(removeLastItem(array));
console.log(multtiplyBy2(array));
console.log(array);