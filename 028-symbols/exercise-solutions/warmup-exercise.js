/*
    1. Create a variable called "baboon" that points to a Symbol
       with a description of "Monkey"

    2. Create a variable called "gorilla" that points to a Symbol
       with a description of "Monkey" as well

    3. Print out the types of each of the symbols as well as their
       description property

    4. Are the two symbols equivalent? (Equality check)
       Why or why not?
*/

const baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey");

console.log(typeof baboon);
console.log(typeof gorilla);

console.log(baboon.description);
console.log(gorilla.description);

console.log(baboon === gorilla);
