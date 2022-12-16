Object.prototype.greet = function () {
  console.log(this);
  console.log(`${this.name} says hello there!`);
};

const nader = {
  name: "nader",
};

const thor = {
  namee: "thor",
};

nader.greet();
thor.greet();

// Array.prototype.map =
