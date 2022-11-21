const character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  [Symbol("name")]: false,
  [Symbol("age")]: 10,
  [4 + 5]: "age",
};

for (const key of Object.keys(character)) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(character));
