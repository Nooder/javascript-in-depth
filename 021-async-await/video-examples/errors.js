const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
      //   reject("there was an error!");
    }, ms);
  });

  return timeout;
};

const causeError = async () => {
  // let result;
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (error) {
    console.log("we are in the error case, all done");
    console.error(error);
  }
  // down here
};

console.log("program started");
causeError();
console.log("program done");
