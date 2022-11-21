const counter = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};

const generatorObject = counter();

for (const value of generatorObject) {
  console.log(value);
}

for (const value of [2, 3, 4]) {
  console.log(value);
}
