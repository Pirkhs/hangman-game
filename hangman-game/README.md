# Hangman Game

## Project Summary

A web application for the iconic hangman game with the following features:
- A random 5-letter word in generated at random
- Begin the game by picking your first letter to guess
- Incorrectly guessed letters display a unique message for the number of lives remaining, along with the updated hangman drawing
- Correctly guessed letters display a confirmation message, along with the guessed letter appearing the word display
- Previously guessed letters are greyed out, and cannot be guessed again
- The game ends when all letters are guessed or when all lives are used up
- Keep track of your best attempt through the number of least incorrect guesses (stored via localStorage)
- Simply click the 'Play Again' button to reset the game to its initial state, ready for the next game

## Setting Up Locally

If you wish to clone this repo locally run the command 'git clone https://github.com/Pirkhs/hangman-game.git'
Ensure you are in the correct 'hangman-game' directory: 'cd hangman-game'
Run 'npm install' in your terminal to download all the required npm packages
The command 'npm run dev' will then host the server locally on port number 5173 which can be viewed in your browser

## Viewing The Online Version

A link to the live version on Netflify can be found here: https://hangman-game-nathan-briers.netlify.app

## Further Information

Version Control:
- Node v21.2.0+
- React v18.2.0+