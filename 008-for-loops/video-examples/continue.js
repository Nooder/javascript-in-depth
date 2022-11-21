for (let i = 0; i < 100; i += 10) {
  console.log(i);

  if (i === 20) {
    i += 20;
    continue;
  }

  console.log("Loop number", i);

  if (i === 60) {
    break;
  }
}
