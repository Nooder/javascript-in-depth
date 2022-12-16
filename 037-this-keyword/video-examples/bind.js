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

const boundGreet = alex.greet.bind({ name: "Iron Man" });
// console.log(boundGreet);
// boundGreet("hello", "there");

alex.friend.greet = alex.friend.greet.bind({ name: "Iron Man" });
alex.friend.greet(1, 2);
