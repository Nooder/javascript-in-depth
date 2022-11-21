const nums = [5, 10, 15, 20, 25, 30, 35];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  //   console.log(sum, nums[i]);
  sum += nums[i];
}

// console.log(sum);

const sum2 = nums.reduce((result, number) => {
  console.log(result, number);

  if (number < 20) {
    return result + number;
  }

  return result;

  // end up here ??
}, 0);

console.log("-----");
console.log(sum2);
