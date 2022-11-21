const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

console.log(countryPop);

const countryPopExtended = {};
for (const entry of Object.entries(countryPop)) {
  const country = entry[0];
  const pop = entry[1];
  countryPopExtended[country] = pop;
}
countryPopExtended["Indonesia"] = 273;
countryPopExtended["Japan"] = 125;

const countryPopExtended2 = {
  ...countryPop,
  Indonesia: 273,
  Japan: 125,
};

console.log(countryPopExtended);
