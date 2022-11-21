import { topMovies } from "./moduleB.js";

const checkMovie = (movieName) => {
  return topMovies.includes(movieName);
};

export { checkMovie };
