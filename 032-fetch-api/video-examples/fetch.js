import fetch from "node-fetch";

const response = fetch("https://www.wallhaven.cc");

// response
//   .then((result) => {
//     //   for (const key in result) {
//     //     console.log(key);
//     //   }
//     //   console.log(result.__proto__);
//     //   console.log(result.__proto__.__proto__);
//     //   console.log(result.url);
//     //   console.log(result.status);
//     //   console.log(result.ok);
//     //   console.log(result.headers);

//     //   const text = result.text();
//     //   text.then((html) => {
//     //     console.log(html);
//     //   });

//     return result.text();
//   })
//   .then((html) => {
//     console.log(html);
//   });

const fetchData = async () => {
  const result = await fetch("https://www.wallhaven.cc");
  const html = await result.text();
  console.log(html);
};

fetchData();
