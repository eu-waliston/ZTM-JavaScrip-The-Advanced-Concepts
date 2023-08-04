let vetor = [];
let v2 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
function zero() {
  for (let i = 0; i <= 50; i++) {
    vetor.push(i - 1);
  }
  if (vetor.includes(-1)) {
    console.log((vetor = 0));
  }
}
zero();
