const movie = {
  title: "Dune",
  year: "2021",
  length: 155,
  book: true,
};

const { book, ...theRest } = movie;

console.log(book);
console.log(theRest);
console.log(movie.rating);
