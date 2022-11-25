import fetch from "node-fetch";
import inquirer from "inquirer";

// pokemon name question
const promptForPokemon = async () => {
  return await inquirer.prompt({
    type: "input",
    name: "pokemon_name",
    message: "Pokemon name: ",
  });
};

// checkbox
const promptForDownloadInfo = async () => {
  return await inquirer.prompt({
    type: "checkbox",
    name: "options",
    message: "Pokemon info to download: ",
    choices: [
      new inquirer.Separator("-- Options --"),
      {
        name: "Stats",
      },
      {
        name: "Sprites",
      },
      {
        name: "Artwork",
      },
    ],
  });
};

// continue
const promptToContinue = async () => {
  return await inquirer.prompt({
    type: "list",
    message: "Would you like to search for another pokemon?",
    name: "continue",
    choices: ["Yes", "No"],
  });
};

const fetchPokemon = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const promptUser = async () => {
  while (true) {
    const pokemonName = await promptForPokemon();
    // fetch the pokemon json
    const pokemonJSON = await fetchPokemon(pokemonName.pokemon_name);
    console.log(pokemonJSON.name, pokemonJSON.weight);
    const pokemonOptions = await promptForDownloadInfo();
    console.log(pokemonOptions.options);
    // use what is in these options to fetch the pictures/sprites
    // save them to the local disk
    const keepGoing = await promptToContinue();
    if (keepGoing.continue === "No") break;
  }
};

promptUser();
