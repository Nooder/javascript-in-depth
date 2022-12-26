class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    console.log("player this", this);
  }
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    console.log("warrior this", this);
  }
}

const player = new Player("Player", 100, 50, ["banana"]);
console.log(player);

const warrior = new Warrior(
  "Genghis Khan",
  500,
  50,
  ["Sabre"],
  "Leather Shield"
);
console.log(warrior);
