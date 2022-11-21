const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);

mySet.add(10);
mySet.add(10);
mySet.add(10);

console.log(mySet);

mySet.add("10");

console.log(mySet);

mySet.delete(20);
console.log(mySet);

console.log(mySet.has(30));
console.log(mySet.has(300));

console.log(mySet.size);
