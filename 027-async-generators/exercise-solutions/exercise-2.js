/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/

const letterGenerator = async function* (sentence) {
  for (const letter of sentence) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if (["a", "e", "i", "o", "u"].includes(letter)) {
          resolve("*");
        } else {
          resolve(letter.toUpperCase());
        }
      }, 200);
    });
  }
};

const letterGeneratorObject = letterGenerator(
  "Monkeys are the coolest animal!"
);

const executeLetter = async () => {
  for await (const letter of letterGeneratorObject) {
    console.log(letter);
  }
};
executeLetter();
