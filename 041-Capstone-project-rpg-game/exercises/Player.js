class Player {
  #stats = {
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(name, stats) {
    this.name = name;
    this.#stats = stats;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return {
      attack: this.#stats.attack,
      defense: this.#stats.defense,
      hp: this.#stats.hp,
    };
  }

  addToStats(statsObject) {
    if (statsObject.attack) {
      this.#stats.attack += statsObject.attack;
    }
    if (statsObject.defense) {
      this.#stats.defense += statsObject.defense;
    }
    if (statsObject.hp) {
      this.#stats.hp += statsObject.hp;
    }
  }

  describe() {
    const stats = this.#stats;
    console.log(
      `Player Stats: HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`
    );
  }
}

export { Player };
