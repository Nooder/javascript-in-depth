const animal = {
  type: "monkey",
  __proto__: Array.prototype,
};

console.log(animal);
console.log(Object.getOwnPropertyNames(animal));
// console.log(Object.getOwnPropertyNames(animal.__proto__));
console.log(Object.getOwnPropertyNames(animal.__proto__.__proto__));

console.log(animal.__proto__.__proto__.__proto__);
console.log(animal.length);
