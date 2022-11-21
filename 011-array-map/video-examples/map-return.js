const numbers = [5, 10, 15, 20, 25, 30];

const timesTen = numbers.map((number) => {
  console.log(number * 10);
  return undefined;
});

console.log(timesTen);
