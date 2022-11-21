const happyCheck = (happy) => {
  if (happy === true) {
    return "Yay!";
  } else {
    return "Nope";
  }
};

const result1 = happyCheck(true);
const result2 = happyCheck(false);

console.log(result1, result2);

const happyCheck2 = (happy) => {
  // return "Yay!"
  // return "Nope"
  return happy === true ? "Yay!" : "Nope";
};

const result3 = happyCheck2(true);
const result4 = happyCheck2(false);

console.log(result3, result4);

const happyCheck3 = (happy) => (happy === true ? "Yay!" : "Nope");

const result5 = happyCheck3(true);
const result6 = happyCheck3(false);

console.log(result5, result6);
