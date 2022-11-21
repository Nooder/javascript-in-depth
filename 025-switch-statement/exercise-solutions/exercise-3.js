/*
    1. Create a variable called "points" that points at the Array:
       [3, 4, 1, 0, 1, 5, 6]

    2. Create a loop that loops over "points" and inside the loop use
       a switch statement that has these cases:
       - 0-2: print out only "Good try!"
       - 3-5: print out only "Very well done!"
       - Otherwise only print out "Wow, shooting for the moon!"

    3. Run the code and make sure the correct messages get printed out
*/

const points = [3, 4, 1, 0, 1, 5, 6];

for (const point of points) {
  switch (point) {
    case 0:
    case 1:
    case 2: {
      console.log("Good try!");
      break;
    }

    case 3:
    case 4:
    case 5: {
      console.log("Very well done!");
      break;
    }

    default: {
      console.log("Wow, shooting for the moon!");
      break;
    }
  }
}
