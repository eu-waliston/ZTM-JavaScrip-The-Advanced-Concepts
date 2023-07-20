//no side effects
//input --> outube (the same return)

const array = [1, 2, 3];
function mutateArray(arr) {
    arr.pop()
}


mutateArray(array);
console.log(array);



