/*
    1. Use npm to install node-fetch if you're on Node < 18
       and import fetch into the file (es-module)
    2. Create a function called "pokemonDownloader" that
       takes no arguments
    3. Inside of "pokemonDownloader" create an Object called
       "pokemonCache" using let
    4. Inside of "pokemonDownloader" create a Function called
       "download" that takes a single parameter which will be a
       String. This function will:
       - Make requests to get a pokemon's info by name from the
         pokeapi at: pokeapi.co
       - Check to see if the pokemon String being downloaded is
         already in "pokemonCache". If it is, it will return the
         associated Object value and log that it was found in the
         cache. Otherwise, it will fetch the pokemon's JSON and
         convert it to an Object to store it in "pokemonCache"
         using the pokemon name as a key and log that it needed
         to be fetched from the API. It should also return the
         pokemon Object that was downloaded.
         Eg: { pikachu: {...}, charmander: {...} }
    5. Initialize and test the pokemon downloader using a few
       different pokemon names

    Example:
    const getPokemon = pokemonDownloader();
    const pikachu = getPokemon("pikachu"); // Pikachu fetched from API
    const mew = getPokemon("mew"); // Mew fetched from API
    const pikachu2 = getPokemon("pikachu"); // Pikachu was in the Cache
*/

import fetch from "node-fetch";

const pokemonDownloader = () => {
  let pokemonCache = {};
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  const download = async (pokemonName) => {
    // check to see if pokemon is in the cache
    if (pokemonCache[pokemonName]) {
      // it is in the cache and return from the cache
      console.log(`${pokemonName} was in the Cache`);
      return pokemonCache[pokemonName];
    } else {
      // not in the cache, we must fetch it
      const response = await fetch(baseURL + pokemonName);
      const json = await response.json();
      console.log(`${pokemonName} fetched from the API`);
      // store the new pokemon in the cache
      pokemonCache[pokemonName] = json;
      return json;
    }
  };

  return download;
};

const getPokemon = pokemonDownloader();
const mew = await getPokemon("mew");
getPokemon("mewtwo");
getPokemon("pikachu");

getPokemon("mew");
