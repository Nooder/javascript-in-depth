const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: {
    pop: 38,
  },
};

const countryPopCopy = { ...countryPop };

console.log(countryPop);
console.log(countryPopCopy);

console.log("-----");

countryPop.Canada.capital = "Ottawa";

console.log(countryPop);

console.log(countryPopCopy);
