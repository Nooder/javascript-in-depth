/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);

mexico["id"] = 25;
mexico.id = 25;

// ["USA", "Guatemala", "Belize"].push("Honduras");

// ["USA", "Guatemala", "Belize"]
mexico.neighbours.push("Honduras");

console.log(mexico);
