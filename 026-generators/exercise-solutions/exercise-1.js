/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

const randomNumber = function* () {
  while (true) {
    yield Math.random();
  }
};

const generatorObject = randomNumber();

// for (let i = 0; i < 10; i++) {
//   console.log(generatorObject.next().value);
// }

// let i = 0;
// while (i < 10) {
//   console.log(generatorObject.next().value);
//   i++;
// }

// let i = 0;
// for (const item of generatorObject) {
//   console.log(item);
//   i++;
//   if (i === 10) {
//     break;
//   }
// }
