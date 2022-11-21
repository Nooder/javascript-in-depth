const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};

// console.log(animal.keys());
console.log(Object.keys(animal));

console.log(Object.values(animal));

console.log(Object.entries(animal));
