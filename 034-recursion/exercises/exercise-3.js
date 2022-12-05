/*
    1. Create a function called "flatten" that will take
       a single Object as an argument

    2. The function will return a flattened version of the Object
       no matter the nested levels (it will overwrite duplicate keys)

    3. Solve this using recursion

    Example:    
        
    console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
    );

    // {
    //     id: 1,
    //     name: 'bob',
    //     happy: true,
    //     id2: 2,
    //     name2: 'alice',
    //     happy2: true
    // }

    HINT: Use the "typeof" operator to check if something
          is an Object (naiive check, no need to be 100%)
    HINT2: The "delete" operator will delete a key from an Object
*/
