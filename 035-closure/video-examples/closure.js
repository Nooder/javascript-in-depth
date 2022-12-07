// global scope
// const prices = [1337]; // 3

const wrapperFunction = () => {
  // prices?
  const prices = [100]; // 2

  const logPrices = () => {
    // const prices = [10, 15, 20, 25]; // 1
    // prices?
    console.log(prices);
  };

  return logPrices;
};

const result = wrapperFunction();
console.log(result);

result();
// console.log(prices);
