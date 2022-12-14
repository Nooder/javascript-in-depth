/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".

    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".

    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/

String.prototype.boop = () => {
  console.log("Boop!");
};

// String.prototype.boop();

const cat = "meow";
cat.boop();

console.log(Object.getOwnPropertyNames(cat.__proto__));
