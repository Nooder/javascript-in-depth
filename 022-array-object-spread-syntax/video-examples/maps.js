const myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 1);
myMap.set("Elephant", 2);

console.log(myMap);

const myMapArray = [...myMap, "boo!"];

console.log(myMapArray);
