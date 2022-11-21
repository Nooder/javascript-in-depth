const mySet = new Set();

mySet.add("hello");
mySet.add("monkey");
mySet.add("monkey");
mySet.add("monkey");
mySet.add(10);
mySet.add(11);
mySet.add(true);

console.log(mySet);

for (const item of mySet) {
  console.log(item);
}
