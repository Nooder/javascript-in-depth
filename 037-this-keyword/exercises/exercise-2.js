/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Make it so if we do: book.characters.list()
       It will always use this Array of mainChars permanently:
       ["Draco", "Severus", "Voldemort"]

       ^ Do not modify "mainChars", you can only change "list"
         Also, you cannot modify the "list" function itself

    HINT* What methods can we use on Functions to manipulate "this"?
*/
