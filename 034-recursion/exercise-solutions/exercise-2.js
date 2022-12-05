/*
    1. Create a function called "flatten" that will take
       a single Array as an argument

    2. The function will return a flattened version of the Array
       no matter the nested levels

    3. Solve this using recursion

    Examples:    
        console.log(flatten([1, 2, 3]));
        // [ 1, 2, 3 ]

        console.log(flatten([1, 2, 3, [1, 2, 3]]));
        // [ 1, 2, 3, 1, 2, 3 ]

        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
        // [1, 4, 5, 6, 7,8, 9, 2, 3]

    HINT: Look up "how to check if something is an Array in js"
          on Google/MDN
    HINT2: What are the base-cases and what do we want to return?
*/

const flatten = (arr) => {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      // looking at an array
      const flattened = flatten(element);
      //   for (const innerElement of flattened) {
      //     result.push(innerElement);
      //   }
      result.push(...flattened); // result.push(1, 2, 3)
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(flatten([1, 2, 3]));
// [ 1, 2, 3 ]

console.log(flatten([1, 2, 3, [1, 2, 3]]));
// [ 1, 2, 3, 1, 2, 3 ]

console.log(flatten([[1, 2, 3], 1, 2, 3]));
// [ 1, 2, 3, 1, 2, 3 ]

console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
// [1, 4, 5, 6, 7,8, 9, 2, 3]

console.log(flatten([1, 2, [4, 5, 6, [7, 8, 9, [10]]], 3]));
// [ 1, 2, 4,  5, 6, 7, 8, 9, 10, 3]
