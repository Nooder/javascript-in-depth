Object.keys({ name: "hi" });

Object.hello = () => console.log("hello there!");

Object.prototype.hello = () => console.log("hello there from animal");
Object.prototype.hello2 = () => "hello";

const animal = {
  type: "monkey",
};

// animal.keys();
animal.hello();

Object.hello();

console.log(Object.getOwnPropertyNames(Object));
console.log(Object.getOwnPropertyNames(animal));
console.log(Object.getOwnPropertyNames(animal.__proto__));
