/*
    1. Create the following  function:

       function Person(name) {
         this.name = name;
       }
    
    2. Create an instance of person in 2 ways:
       const cleo = Person("Cleo")
       const taylor = new Person("Taylor")

    3. Log out the own property names of each of these
       variables. What happens?

    4. Log out just taylor's own property names. Does this
       work? Why?

    5. Log out the prototype of cleo and taylor. What is
       happening? What about just taylor?
*/

function Person(name) {
  this.name = name;
}

const cleo = Person("Cleo");
const taylor = new Person("Taylor");

// console.log(Object.getOwnPropertyNames(cleo));
// undefined.__proto__
// console.log(Object.getOwnPropertyNames(cleo.__proto__));
console.log(taylor.name);
console.log(taylor.__proto__.constructor.name);
console.log(Object.getOwnPropertyNames(taylor));
console.log(Object.getOwnPropertyNames(taylor.__proto__));
console.log(Object.getOwnPropertyNames(taylor.__proto__.constructor));
// console.log(Object.getOwnPropertyNames(taylor.__proto__.__proto__));
