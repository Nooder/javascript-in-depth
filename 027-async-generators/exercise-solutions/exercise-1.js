/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

const do50percent = async function* () {
  while (true) {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Fast!");
        }, 500);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Slow!");
        }, 3000);
      });
    }
  }
};

const do50GeneratorObject = do50percent();

const execute50Percent = async function () {
  for await (const number of do50GeneratorObject) {
    console.log(number);
  }
};
execute50Percent();
