const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 10,
};

const tiger = "Rajah";

const printMonkey = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      monkey.age++;
      console.log(monkey);
      resolve(monkey);
    }, 2000);
  });
};

console.log("hello????");

const awaitedMonkey = await printMonkey();

export { awaitedMonkey };
export default printMonkey;
