const alex = {
  name: "Alex",
  greet: function () {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  arrowGreet: () => {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },
  friend: {
    name: "Alex's friend",
    greet: function () {
      console.log(this);
      console.log(`${this.name} says hi!`);
    },
  },
};

// alex.greet();
// alex.arrowGreet();
alex.friend.greet();
