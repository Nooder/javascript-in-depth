/*
    Project-Specific Tips:

    - Make sure you understand the requirements
    - Fetch the pokemon object first, then you can use it to look up the relevant info or
      URL's to re-fetch the images if requested by the User
    - Create LOTS of functions (I have 11, you can do it with more or less)
    - Use the following imports:
        - import fetch from "node-fetch"
        - import inquirer from "inquirer"
        - import fs from "fs/promises"
        - import path from "path"
    - First make sure you can fetch and get to the data you need, then focus on saving
      the data to disk using fs
    - You might find it useful to create separate files for functions and import/export them
    - Use async/await as much as you can to simplify the promises
    - Promise.all might be handy when trying to fetch 4-8 sprites at once
      but this is an optimization and not necessary
*/
