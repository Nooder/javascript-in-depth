/*
    1. Create a function called "createDatabase"
       which has no parameters
    2. Create an array called "storage" inside
       "createDatabase" with the following value:
       ["Apple", "Banana", "Carrot"]
    3. Create a function inside "createDatabase"
       called "addToDB" that takes a single argument.
       This function will push the argument on to
       the "storage" array then log out the array
    4. Create another function inside "createDatabase"
       called "clearDB" with no parameters. This function
       will clear all the elements out from the "storage"
       array (erase them all)
    5. Return an array from "createDatabase" with two values:
       [addToDB, clearDB]

    6. How would you use "createDatabase" to add values to
       then clear out the "database" (storage array inside)?
*/

const createDatabase = () => {
  let storage = ["Apple", "Banana", "Carrot"];

  const addToDB = (itemToAdd) => {
    storage.push(itemToAdd);
    console.log(storage);
  };

  const clearDB = () => {
    storage = [];
    console.log(storage);
  };

  return [addToDB, clearDB];
};

const [add, clear] = createDatabase();

add("kiwi");
add("mango");
clear();
add("moose");
