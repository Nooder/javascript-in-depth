function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} says awesome!`);
  };
}

const storm = new Hero("Storm");
console.log(storm);

storm.greet();
storm.greet.call({ name: "Cyborg" });

console.log("--------");

console.log(Object.getOwnPropertyNames(storm));
console.log(Object.getOwnPropertyNames(storm.__proto__));

console.log(storm.__proto__.constructor.name);
console.log(storm.__proto__.__proto__.constructor.name);
console.log(storm.__proto__.__proto__.__proto__);

// Hero => Object => null
