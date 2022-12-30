class Database {
  #token = "abc123";
  constructor() {
    this.#token = "xyz789";
  }

  saveData(data) {
    this.#initDBConnection();
    this.#authorize();
    this.#updateQuery();
    console.log(this.#token);
  }

  #initDBConnection() {}
  #authorize() {}
  #updateQuery() {}
}

class CustomDB extends Database {
  #token = "123456";
  saveData(data) {
    // super.#initDBConnection(); // Error
  }
}

const db = new Database();
console.log(db);
console.log(db.token);
// db.token = "superhappy!"; // very bad
// console.log(db);
db.saveData();

// db.saveData([1, 2, 3]); // good
// db.authorize(); // ??

// db.authorize = "meow";
// db.authorize();

console.log(Object.getOwnPropertyNames(db));
console.log(Object.getOwnPropertyNames(db.__proto__));
