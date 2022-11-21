const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const generatorObject = generator();

console.log(generator);
console.log(generatorObject);
// console.log(generatorObject.next());

// generatorObject.next().value.then((result) => {
//   console.log("result ", result);
// });

// const getObjectsAsync = async () => {
//   for (const promise of generatorObject) {
//     const result = await promise;
//     console.log(result);
//   }
// };

// getObjectsAsync();

for await (const promise of generatorObject) {
  //   const result = await promise;
  console.log(promise);
}
