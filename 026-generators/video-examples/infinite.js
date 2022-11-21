const counter = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const counterGenerator = counter();

// for (const value of counterGenerator) {
//   console.log(value);
// }

let count = 0;

while (count < 5) {
  console.log(counterGenerator.next());
  count++;
}
