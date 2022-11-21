const asyncGenerator = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const asyncGeneratorObject = asyncGenerator();

console.log(asyncGenerator);
console.log(asyncGeneratorObject);

const asyncGeneratorExecuter = async () => {
  for await (const promise of asyncGeneratorObject) {
    console.log(promise);
  }
};

asyncGeneratorExecuter();
