const fetchData = async () => {
  return "hello!";
};

const result = fetchData();
console.log(result);

result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

const useHello = async () => {
  const result = await fetchData();
  console.log(result);
};

useHello();
