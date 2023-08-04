let vetor = [];
for (let i = 0; i < 20; i++) {
  vetor.push(i);
}
let fd = [5];

if (vetor.includes(Number(fd))) {
  console.log("Here: ", fd);
} else {
  console.log("Sorry :( ");
}
