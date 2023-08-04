let vetor = [];

function count() {
  let count = 0;
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      vetor.push(i);
      count++;
    }
  }
  console.log(count);
}

count();
