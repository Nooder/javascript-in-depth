const animal = {
  type: "monkey",
  numLegs: 2,
};

console.log(animal);
console.log(animal.numLegs);
// console.log(animal.hello());
console.log(animal.toString());
console.log(animal.hasOwnProperty("type"));
console.log(animal.hasOwnProperty("numLegs"));
console.log(animal.hasOwnProperty("hello"));
console.log(animal.hasOwnProperty("toString"));

const myObject = {};
const myObject2 = new Object();
