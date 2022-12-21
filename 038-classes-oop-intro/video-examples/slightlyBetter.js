const createPlayer = (name, hp, mp, items) => {
  return {
    name,
    hp,
    mp,
    items,
  };
};

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
hanSolo.hp = 150;
console.log(hanSolo);

const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader);
