/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Player {
  lives = 3;
  shootingDelay = 2000; // ms
  yPos = 500;
  xPos = 500;

  //   constructor() {}
  shoot() {
    // shoot a laser upwards
  }
}

class Enemy {
  hp = 1;
  shootingDelay = 9000; // ms
  yPos;
  xPos;
  score = 10;

  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  shoot() {
    // shoot a ___ downwards
  }
}

const spaceship = new Player();
console.log(spaceship);

const alien1 = new Enemy(10, 10);
console.log(alien1);
