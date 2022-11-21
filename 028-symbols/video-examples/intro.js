const mySymbol = Symbol();
const namedSymbol = Symbol("monkey");

console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof mySymbol);
console.log(typeof namedSymbol);
console.log(typeof "hello");

console.log(Symbol() === mySymbol);
console.log(Symbol("monkey") === namedSymbol);
console.log(mySymbol === mySymbol);
console.log(mySymbol.description);
console.log(namedSymbol.description);
