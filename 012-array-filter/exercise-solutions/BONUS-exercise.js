/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

const nums = [10, 20, 30, 40, 50]
  .map((num) => {
    return num * 2;
  }) // [ 20, 40, 60, 80, 100 ]
  .filter((num) => {
    if (num > 50) {
      return true;
    }

    return false;
  }); // [ 60, 80, 100 ]

console.log(nums);

// const timesTwo = nums.map((num) => {
//   return num * 2;
// }); // [ 20, 40, 60, 80, 100 ].filter(...)

// console.log(timesTwo);

// const over50 = timesTwo.filter((num) => {
//   if (num > 50) {
//     return true;
//   }

//   return false;
// });

// console.log(over50);
