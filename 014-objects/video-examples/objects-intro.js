const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};

console.log(animal);

animal["name"] = "moo";

console.log(animal);

animal.type = "cow";

console.log(animal);

animal["num legs"] = 5;
// animal.num legs = 5;

console.log(animal);

animal.numLegs = 5;

console.log(animal);
