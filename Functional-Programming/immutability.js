//Immutability

const obj = { name: "Andre" };
function clone(obj) {
  return { ...obj };
}

obj.name = "Nana";
