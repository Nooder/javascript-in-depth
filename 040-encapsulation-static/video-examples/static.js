class Utils {
  static description = "Awesome utilities!";
  description = "Another description?";

  static caps(str) {
    return str.toUpperCase();
  }

  lower(str) {
    return str.toLowerCase();
  }
}

Utils.hello = "hello";
Utils.prototype.camelCase = () => {};

console.log(Utils.description);
console.log(Utils.caps);

console.log(Object.getOwnPropertyNames(Utils));

const utils = new Utils();
console.log(utils);
console.log(Object.getOwnPropertyNames(utils));
console.log(Object.getOwnPropertyNames(utils.__proto__));
