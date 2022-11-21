const cities = ["Vancouver", "Mexico City", "Toronto", "London", "Berlin"];

// const vancouver = cities[0];
// const mexicoCity = cities[1];

const [, mexicoCity, ...theRest] = cities;

// console.log(vancouver);
console.log(mexicoCity);
console.log(theRest);
