const animal = "Tiger";

// switch ("Monkey")
switch (animal) {
  case "Tiger": {
    console.log("You are a tiger!");
    // break;
  }

  case "Koala":
  case "Monkey": {
    console.log("The best animal!");
    // break;
  }

  default: {
    console.log("Must be something else!");
    break;
  }
}

console.log("All done!");
