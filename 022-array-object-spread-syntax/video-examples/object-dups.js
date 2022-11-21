const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

const countryPopCopy = {
  Germany: 999,
  ...countryPop,
  Indonesia: 273,
};

console.log(countryPopCopy);
