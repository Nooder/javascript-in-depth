class GridObject {
  #backgroundSprites = ["🌳", "🌲", "🌴", "🌵"];

  constructor(sprite, type = "undiscovered") {
    if (!sprite) {
      const randomIndex = Math.floor(
        Math.random() * this.#backgroundSprites.length
      );
      this.sprite = this.#backgroundSprites[randomIndex];
    } else {
      this.sprite = sprite;
    }
    this.type = type;
  }

  describe() {
    const random = Math.random();
    if (random < 0.33) {
      console.log("Coast is clear!");
    } else if (random < 0.66) {
      console.log("These surroundings look familiar.");
    } else {
      console.log("There's not much here.");
    }
  }
}

export { GridObject };
