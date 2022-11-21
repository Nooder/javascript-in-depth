/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

// "brain" storage
const seenNumbers = new Set();

// "Looking" at each item
for (let i = 0; i < numbers.length; i++) {
  // did we see this before? (check brain)
  if (seenNumbers.has(numbers[i])) {
    // found the first duplicate!
    console.log(numbers[i]);
    //  break;
  }

  // have not seen it, we need to store it (brain)
  seenNumbers.add(numbers[i]);
}
