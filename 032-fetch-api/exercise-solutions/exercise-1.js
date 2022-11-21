/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch
    
    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((result) => {
    console.log(typeof result);
    console.log(result);
    console.log(result.title);
    //  result.userId
  });
