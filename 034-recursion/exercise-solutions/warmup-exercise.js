/*
    1. Create a function called "fizzbuzz" that takes two
       number arguments: "startNum" and "endNum"
    2. The function will count from "startNum" to the "endNum"
       incrementing by 1 each time and do the following:
    3. If the number is:
       - Divisible by 3: Print "Fizz" followed by the number
       - Divisible by 5: Print "Buzz" followed by the number
       - Divisible by both 3 AND 5:
         - Print "FizzBuzz" followed by the number (no fizz or buzz)
       - In all other cases, just print the number itself
        
    3. You must solve this using recursion
    4. Test it with different start and end values

    HINT: What is the base-case vs the "regular" cases here?
*/

const fizzbuzz = (startNum, endNum) => {
  // base case
  if (startNum === endNum + 1) return;

  if (startNum % 3 === 0 && startNum % 5 === 0) {
    // % 15
    console.log(`FizzBuzz ${startNum}`);
  } else if (startNum % 3 === 0) {
    // % 3
    console.log(`Fizz ${startNum}`);
  } else if (startNum % 5 === 0) {
    // % 5
    console.log(`Buzz ${startNum}`);
  } else {
    console.log(`${startNum}`);
  }

  fizzbuzz(startNum + 1, endNum);
};

fizzbuzz(1, 100);
