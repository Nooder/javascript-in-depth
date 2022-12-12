Object.prototype.speak = () => {
  console.log("hi from prototype");
};

const animal = {
  type: "monkey",
  numLegs: 2,
  //   speak: () => {
  //     console.log("hi");
  //   },
};

const animal2 = {
  type: "cat",
};

// console.log(animal);

// console.log(animal.__proto__);
// console.log(animal.__proto__.__proto__);

// console.log(Object.getPrototypeOf(animal));

// console.log(Object.getOwnPropertyNames(animal));
console.log(Object.getOwnPropertyNames(animal.__proto__));

animal.speak();
animal2.speak();
