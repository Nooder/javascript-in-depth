const mySet = new Set();

mySet.add("Batman");
mySet.add("Robin");
mySet.add("Spiderman");
mySet.add("Batman");

console.log(mySet);

const mySetCopy = ["Robin", ...mySet, "Batman"];

console.log(mySetCopy);
