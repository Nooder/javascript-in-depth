/*
    Project-Specific Tips:

    - Make sure you understand the requirements
    - How might you model a card so it has a value and a suit?
      Eg: { card: "King", suit: "Hearts" }
    - Create a function that creates a deck of cards for you
      Eg: const deck = generateDeck() // This might return an array of card Objects
    - Create a function that draws a card from a deck for you
      Eg: const card = drawCard(deck); // This might return a single card Object
    - Create a function that calculates a score for you, given a hand
      Eg: const score = checkScore(hand); // This might return the score of the hand as a Number
    - Can we create an infinite while loop that will only break under certain conditions?
      Eg:
      while(true) {
        // deal player card
        // did player bust? - break - player loses
        // did player hit 21? - break - player wins

        // deal dealer card
        // did dealer bust? - break - player wins
        // did dealer hit 21? - break - player loses
    }
*/
