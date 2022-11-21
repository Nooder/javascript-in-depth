const fruit = true && "bananas";
console.log(fruit);

console.log(false && "oranges");
console.log(0 && "cucumbers");

console.log("-------");

console.log(true || "bananas");
console.log(false || "oranges");
console.log("" || "cucumbers");

console.log("-------");

console.log(0 ?? "monkeys");
console.log("" ?? "koalas");
console.log(null ?? "elephants");
