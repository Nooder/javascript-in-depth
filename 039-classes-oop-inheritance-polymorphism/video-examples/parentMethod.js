class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}
Player.prototype.hi = "hello from player proto";

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    super.speak("Rawr!");
  }
}

const warrior = new Warrior(
  "Genghis Khan",
  500,
  50,
  ["Sabre"],
  "Leather Shield"
);
warrior.speak("Hello!");

console.log(Object.getOwnPropertyNames(Player.prototype));
console.log(Object.getOwnPropertyNames(Player));

console.log(warrior instanceof Player);
console.log(warrior instanceof Warrior);
console.log(warrior instanceof Array);
console.log(warrior instanceof Object);
