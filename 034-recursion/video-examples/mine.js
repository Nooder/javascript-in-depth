const mine = {
  gold: 3,
  left: {
    gold: 2,
    left: {
      gold: 4,
    },
    right: {
      gold: 1,
    },
  },
  right: {
    gold: 5,
    right: {
      gold: 1,
    },
  },
};

const countGold = (level) => {
  let total = level.gold;
  //
  if (level.left) total += countGold(level.left);
  //
  if (level.right) total += countGold(level.right);
  //

  return total;
};

const result = countGold(mine);
console.log(result);
