const alex = {
  name: "Alex",
  greet: function (a, b) {
    console.log(this);
    console.log(a, b);
    console.log(`${this.name} says hi!`);
  },
  arrowGreet: () => {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  friend: {
    name: "Alex's friend",
    greet: function (a, b) {
      console.log(this);
      //   console.log(args);
      console.log(a, b);
      console.log(`${this.name} says hi!`);
    },
  },
};

alex.greet();
alex.friend.greet();

console.log("------");
alex.greet.apply({ name: "Iron Man", age: 40 }, ["hello", 100]);
alex.friend.greet.call({ name: "Wonder Woman", age: 45 }, "hello", 100);
