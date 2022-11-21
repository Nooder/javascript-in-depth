/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

const getRandomNumber = function* () {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
};

const groceryList = function* () {
  const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  const groceryLength = groceries.length;
  for (let i = 0; i < groceryLength; i++) {
    const randomIndex = Math.floor(Math.random() * groceries.length);
    //  console.log(randomIndex, groceries.length, groceryLength);
    const removedItem = groceries.splice(randomIndex, 1)[0];
    yield removedItem;
  }
};

const randomNumberGenerator = getRandomNumber();
const groceryGenerator = groceryList();

for (let i = 0; i < 5; i++) {
  const randomNumber = randomNumberGenerator.next().value;
  const grocery = groceryGenerator.next();
  //   console.log(grocery);
  //   const grocery = groceryGenerator.next().value;
  console.log(`${randomNumber} ${grocery.value}`);
}
