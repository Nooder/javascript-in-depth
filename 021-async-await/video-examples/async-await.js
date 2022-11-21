const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting..."); // 1

makeTimeout(1000)
  .then((result) => {
    console.log("from .then", result); // 3
  })
  .then(() => {
    return "hello";
  });

const fetchStuff = async () => {
  const result = await makeTimeout(500);
  console.log("from async func", result);
};

fetchStuff();
fetchStuff();

console.log("Program complete..."); // 2
