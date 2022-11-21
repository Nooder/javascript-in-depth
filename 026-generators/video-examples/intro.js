const counter = function* () {
  // pause here and return the generator
  console.log("This is the first log");
  yield 1;
  console.log("this is after yield 1");
  yield 2;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
