// this - 4 Ways

//new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 55);
console.log(person1);

// impliciti binding
const person2 = {
  name: "Karen",
  age: 40,
  hi() {
    console.log(`Hi ${this.name}`);
  },
};

//explicit binding
const person3 = {
  name: "Max",
  age: 20,
  hi: function () {
    console.log(`Hi ${this.setTimeout}`);
  }.bind(window),
};

console.log(person3.hi());

//Arrow function
const person4 = {
  name: "Lucian",
  age: 30,
  hi: function () {
    var inner = () => {
      console.log(`Hi ${this.name}`);
    };
  },
};

person4.hi()