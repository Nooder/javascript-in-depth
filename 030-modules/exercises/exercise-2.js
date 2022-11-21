/*
    1. Create a new folder called "exercise2"
    2. Inside of "exercise2" create 4 files:
       - main.js
       - modules.js
       - moduleA.js
       - moduleB.js

    3. Inside of moduleB.js create an Array called "topMovies":
       ["Spirited Away", "The Matrix", "Star Wars", "Zoolander"]
       Export "topMovies" as a NAMED export

    4. Inside of moduleA.js, import "topMovies" from moduleB.js.
       Then, create a Function called "checkMovie" that has a String
       parameter called "movieName". This function will RETURN true
       if the movie is in "topMovies", otherwise it will RETURN false.
       Export "checkMovie" as a NAMED export

    5. Inside of modules.js, import "checkMovie" from moduleA.js as
       well as "topMovies" from moduleB.js. Then, export them both
       as NAMED exports (This file will both import and export the
       same variables)

    6. Import both "checkMovie" and "topMovies" on ONE line inside
       of main.js FROM modules.js. Call "checkMovie" with different
       movie names to make sure it works. Also, print out "topMovies"
       to make sure it's the correct array. Run main.js using Node.

    HINT: Make sure to make a package.json file inside of
    "exercise2" with this inside: { "type": "module" }
*/
