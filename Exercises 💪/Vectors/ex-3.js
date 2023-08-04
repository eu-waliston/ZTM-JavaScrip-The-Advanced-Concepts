let vetor = [];

for (let i = 0; i < 17; i++) {
    vetor.push(i)
}

function change() {
  let pt1 = vetor.splice(0, 8);
  let pt2 = vetor.splice(0, 8);
  let newArr = pt2.concat(pt1);
  return console.log(newArr);
}

change();
