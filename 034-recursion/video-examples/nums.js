const nums = [1, 2, 3, 4, 5, 6];

const sum = (array, index) => {
  // stop
  if (index === array.length - 1) {
    console.log(`BASE CASE: Index ${index}`);
    return array[index]; // array[array.length - 1]
  }

  console.log(`At index: ${index}`);
  const total = array[index] + sum(array, index + 1);
  console.log(`Total at index: ${index} is ${total}`);
  return total;
};

const result = sum(nums, 0);

console.log(result);
