let health = 35;

if (health > 50) {
  console.log("You have more than 50% health!");
} else if (health > 30) {
  console.log("You have between 30 and 50 health!");
} else if (health > 20) {
  console.log("You are running low on health!");
} else {
  console.log("You have less than or equal to 20 health!");
}

console.log("Game over!");
