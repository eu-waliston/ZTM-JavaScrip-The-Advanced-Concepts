const string = ["a", "l", "i", "s", "t", "o", "n"];

//PUSH -> add on the last position
string.push("e");

//POP -> remove the last item
string.pop();

//UNSHIFT -> add on the first position
string.unshift("w");

//SPLICE
string.splice(2, 0, "alien");

console.log(string);
