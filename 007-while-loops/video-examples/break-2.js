let score = 0;

// infinite loop
while (true) {
  console.log("inside the loop!");

  if (score >= 3) {
    break;
  }

  if (score === 2) {
    break;
  }

  score++;
}

console.log("Done the loop!");
