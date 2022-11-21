const asyncGenerator = async function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i++;
    yield* [1, 2, 3];
  }
};

const asyncGeneratorObject = asyncGenerator();

console.log(asyncGenerator);
console.log(asyncGeneratorObject);

const asyncStarter = async () => {
  for await (const number of asyncGeneratorObject) {
    console.log(number);
  }
};

asyncStarter();
console.log("Hello???");
