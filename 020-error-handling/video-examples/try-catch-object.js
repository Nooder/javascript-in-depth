try {
  const user = {
    name: "Alex",
    age: 21,
    // profile: {
    // //   colour: "blue",
    // },
  };
  console.log(user.profile.colour);
  // user.undefined.colour
  console.log("do I get here??");
} catch (error) {
  console.error("something bad happened..");
  console.error(error);
}

// ...
