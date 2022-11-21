const character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  __admin__: false,
};

for (const key of Object.keys(character)) {
  console.log(key);
}
