// const counter = (number) => {
//   while (number >= 0) {
//     console.log(number);
//     number--;
//   }
// };

// counter(7);

const counter = (number) => {
  // check for 0 then stop
  console.log(number);
  if (number === 0) return;
  counter(number - 1);
};
counter(5);
