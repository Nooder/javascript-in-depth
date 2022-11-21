/*
    Requirements:

    - Generate a deck of 52 cards (2-Ace, all 4 suits)
    - At the start of the game, the "dealer" and "player" each
      get dealt 2 random cards (no replacement)
    - The game plays itself according the the following behaviour:
        1. Continue while neither player has exceeded
           21 points or gotten exactly 21
        2. The player is dealt a random card
        3. If the player goes above 21, dealer wins
           If the player gets exactly 21, player wins
        4. The dealer is dealt a random card
        5. If the dealer goes above 21, player wins
           If the dealer gets exactly 21, player wins
        6. Repeat - go back to step 1

    Point Breakdown:
    2-10: Actual Face Value
    Jack, Queen, King: 10
    Ace: 1*

    Logging:
    - Starting hands
    - Ending hands + who won + score
*/
