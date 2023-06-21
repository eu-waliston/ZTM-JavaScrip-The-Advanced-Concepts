//function Expressiom
const canada = () =>  {
  console.log("COLD!!!");
}

//function declaration
function india() {
  console.log("WARM!!!");
}

// functiuon invocation
canada()
india()

function marry(person1,person2) {
  console.log(arguments);
  return `${person1} is now married  to  ${person2}`
}

marry("Tina", "Marco")

