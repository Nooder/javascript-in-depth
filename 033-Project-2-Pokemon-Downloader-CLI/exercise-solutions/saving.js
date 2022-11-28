import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";

const saveImageFile = async (filePath, arrayBuffer) => {
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
};

const createFolder = async (folderName) => {
  const folderPath = path.join(process.cwd(), folderName);
  try {
    await fs.access(folderPath);
    // folder exists
  } catch {
    // folder doesn't exist
    fs.mkdir(folderPath);
  }
};

const savePokemonStats = async (folderName, pokemonStatsObject) => {
  let statsString = "";
  for (const stat of pokemonStatsObject) {
    statsString += `${stat.stat.name}: ${stat.base_stat}\n`;
  }

  await createFolder(folderName);
  const filePath = path.join(process.cwd(), folderName, "stats.txt");
  await fs.writeFile(filePath, statsString);
};

const savePokemonArtwork = async (folderName, pokemonSpritesObject) => {
  const url = pokemonSpritesObject.other["official-artwork"].front_default;
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();

  await createFolder(folderName);
  const filePath = path.join(process.cwd(), folderName, "artwork.png");
  await saveImageFile(filePath, arrayBuffer);
};

const savePokemonSprites = async (folderName, pokemonSpritesObject) => {
  let spritePromises = [];
  let spriteNames = [];

  for (const [name, url] of Object.entries(pokemonSpritesObject)) {
    if (!url) continue;
    if (name === "other" || name === "versions") continue;

    spritePromises.push(fetch(url).then((res) => res.arrayBuffer()));
    spriteNames.push(name);
  }

  spritePromises = await Promise.all(spritePromises);
  await createFolder(folderName);
  for (let i = 0; i < spritePromises.length; i++) {
    const filePath = path.join(
      process.cwd(),
      folderName,
      `${spriteNames[i]}.png`
    );
    await saveImageFile(filePath, spritePromises[i]);
    console.log(`Saved: ${filePath}`);
  }
};

const parseOptions = async (pokemonObject, optionsObject) => {
  const options = optionsObject.options;
  const pokemonName = pokemonObject.name;

  if (options.includes("Stats")) {
    await savePokemonStats(pokemonName, pokemonObject.stats);
  }

  if (options.includes("Sprites")) {
    await savePokemonSprites(pokemonName, pokemonObject.sprites);
  }

  if (options.includes("Artwork")) {
    await savePokemonArtwork(pokemonName, pokemonObject.sprites);
  }
};

export { parseOptions };
