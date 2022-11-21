/*
    1. Write a function called "square":

    square will have 1 parameter:
        - num: this will be a number
    
    "square" will return the square of "num" (num**2)

    2. Write another function called sumOfSquares:

    sumOfSquares will have 2 parameters:
        - num1: this will be a number
        - num2: this will also be a number

    sumOfSquares will need to:
        1. Use the square function inside itself
        2. return back square of num1 + the square of num2

    3. Test the function using these:
     - const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
     - const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
*/

const square = (num) => {
  return num ** 2;
};

const sumOfSquares = (num1, num2) => {
  // num1 = 2, num2 = 3
  return square(num1) + square(num2);
  // return square(2) + square(3)
  // return 4 + 9
  // return 13
};

const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
console.log(sum1, sum2);
