try {
  const message = "hello there!";
  console.log(message);
  throw new Error("boom!");
} catch (error) {
  console.error(error);
  console.error("caught!");
}

console.log("hi?");
