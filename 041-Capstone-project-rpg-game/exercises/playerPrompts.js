import inquirer from "inquirer";

async function promptPlayerForDirection() {
  const results = await inquirer.prompt({
    type: "list",
    name: "direction",
    message: "Which direction would you like to travel:",
    choices: ["Up", "Down", "Left", "Right"],
  });
  return results.direction;
}

export { promptPlayerForDirection };
