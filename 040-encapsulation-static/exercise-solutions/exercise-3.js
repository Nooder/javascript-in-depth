/*
    1. Go to the MDN javascript documentation online
       and lookup "Array".

    2. What are all the STATIC properties and methods
       on the Array Object?

    3. What are all the INSTANCE properties and methods
       on Array instances?

    4. Explain why some of these are static and why some
       are instance fields/properties/methods
*/

console.log(Array.isArray([]));

const str = "hello";
Array.isArray(str); // false
const arr = new Array();
arr.isArray(str);

console.log(Array.isArray("hello"));
console.log(Array.length);
console.log(Array.name);
console.log(Array.prototype);
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
