/*
    1. Create an variable called "jungle" that points at the array:
        ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]

    2. Use array destructuring to destructure out "Lion", and 
       "Rabbit" while ignoring the other animals

    3. Print out your variables containing "Lion" and "Rabbit"
*/

// const jungle = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"];

// const [, lion, , rabbit] = jungle;

const [, lion, , rabbit] = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"];

console.log(lion, rabbit);
