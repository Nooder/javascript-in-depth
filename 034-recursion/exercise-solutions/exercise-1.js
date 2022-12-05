/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/

const palindrome = (str) => {
  if (str.length === 0) return true;
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] !== str[str.length - 1]) return false;

  return palindrome(str.substring(1, str.length - 1));
};

console.log(palindrome("racecar")); // true
console.log(palindrome("racecarracecar")); // true
console.log(palindrome("racecard")); // false
console.log(palindrome("dracecar")); // false
console.log(palindrome("racedcar")); // false
console.log(palindrome("bobcat")); // false
console.log(palindrome("wow")); // true
console.log(palindrome("kayak")); // true
