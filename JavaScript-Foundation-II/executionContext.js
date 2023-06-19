function printName() {
  return 'Waliston Euripedes';
}

function findName() {
  return printName();
}

function sayMyName() {
  return console.log(`Hello ${findName()}`);
}

sayMyName();
