const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};

delete animal.type;
delete animal["id"];

console.log(animal);
