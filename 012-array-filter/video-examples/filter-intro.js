const nums = [5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(nums);
console.log(evenNumbers);
