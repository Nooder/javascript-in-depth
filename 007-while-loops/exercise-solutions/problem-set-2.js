/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

// Printing even numbers
let i = 10;
while (i <= 40) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Printing odd numbers
let j = 10;
while (j <= 40) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}
