const nums = [5, 6, 7, 8, 9, 10];

const oddNumbers = nums.filter((num) => {
  if (num % 2 === 1) {
    return 100; // truthy
  }

  // ???
});

console.log(nums);
console.log(oddNumbers);
