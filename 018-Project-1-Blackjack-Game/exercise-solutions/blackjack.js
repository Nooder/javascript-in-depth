const generateDeck = () => {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  // {card: "King", suit: "Hearts"}

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const checkScore = (hand) => {
  let total = 0;

  for (const cardObject of hand) {
    // check if it's j, q, k
    if (cardObject.card === "King") {
      total += 10;
    } else if (cardObject.card === "Queen") {
      total += 10;
    } else if (cardObject.card === "Jack") {
      total += 10;
    }
    // check if it's an ace
    else if (cardObject.card === "Ace") {
      total += 1;
    }
    // otherwise it's 2-10
    else {
      total += Number(cardObject.card);
    }
  }

  return total;
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", checkScore(dealerHand));

while (true) {
  // deal player card
  playerHand.push(drawCard(myDeck));
  // check if player bust over 21
  const playerScore = checkScore(playerHand);
  let dealerScore = checkScore(dealerHand);

  if (playerScore > 21) {
    console.log(`You lose! Your final score was: ${playerScore}
    while the dealer had ${dealerScore}`);
    break;
  }
  // check if player hits 21
  if (playerScore === 21) {
    console.log(`You win! Your final score was ${playerScore}
    while the dealer had ${dealerScore}`);
    break;
  }

  // deal dealer card
  dealerHand.push(drawCard(myDeck));
  // check if dealer bust over 21
  dealerScore = checkScore(dealerHand);

  if (dealerScore > 21) {
    console.log(`You win! Your final score was: ${playerScore}
    while the dealer had ${dealerScore}`);
    break;
  }
  // check if dealer hits 21
  if (dealerScore === 21) {
    console.log(`You lose! Your final score was: ${playerScore}
    while the dealer had ${dealerScore}`);
    break;
  }
}

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", checkScore(dealerHand));
