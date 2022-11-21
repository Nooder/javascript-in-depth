const myMap = new Map();

console.log(myMap);

// {
//     name: 'nader',
//     age: 10
// }

myMap.set("name", "nader");
myMap.set("age", 10);

console.log(myMap);

const age = myMap.get("age");
console.log(age);

myMap.set("age", 11);
console.log(myMap);

console.log(myMap.has("name"));
console.log(myMap.has("last name"));

console.log(myMap.size);

myMap.delete("age");
console.log(myMap);
console.log(myMap.size);
