import { useState } from 'react'
import Graphic from './Graphic'
import { generate} from "random-words"
import WordDisplay from './WordDisplay'

const LetterGuess = () => {
    let [correctLetter, setCorrectLetter] = useState(undefined)
    const [wordToGuess, setWordToGuess] = useState(generate({minLength: 5, maxLength: 5}).toUpperCase())
    const [isGameOver, setIsGameOver] = useState(false)
    const [message, setMessage] = useState("Begin by picking a letter to guess:")
    let [gameState, setGameState] = useState(1)
    const [alphabet, setAlphabet] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ])

    console.log(wordToGuess);

    const resetGame = () => {
        setWordToGuess(generate({minLength: 5, maxLength: 5}).toUpperCase())
        setIsGameOver(false)
        setGameState(1)
        setMessage('Begin by picking a letter to guess:')
        setAlphabet(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ])
    }

    const handleLetterGuess = (e) => {
        const guessedLetter = e.target.value;
        setAlphabet(currAlphabet => currAlphabet.filter(letter => letter !== guessedLetter ))
        if (wordToGuess.includes(guessedLetter)) handleCorrectlyGuessedLetter(guessedLetter);
        else handleIncorrectlyGuessedLetter();
    }
    
    const handleCorrectlyGuessedLetter = (guessedLetter) => {
        setMessage('✅ Correct, Pick another letter:')
        setCorrectLetter(guessedLetter)
    }
    
    const handleIncorrectlyGuessedLetter = () => {
        setMessage(`❌ Incorrect, ${9-gameState} guesses left`)
        setGameState(++gameState)
        if (gameState === 10) {
            setMessage('🚫 Game Over, You Lose :(')
            setIsGameOver(true)
        }
    }

    const handleCorrectLetterState = (state) => {
        console.log(state);
        setCorrectLetter(state)
    }

    return (
        <>
        <div className="section-letter-guess">

            <p> {message} </p>

            { isGameOver ? 
                <button className="btn-reset" onClick={() => {resetGame()}}> Play Again </button>
                : 
                <div className="letter-options">
                {alphabet.map(letter => {
                    return (
                        <button className="button-letter" key={letter} value={letter} onClick={(e) => {handleLetterGuess(e)}} > {letter} </button>  
                    )
                })}
                </div>
            }
        </div>
            <Graphic gameState={gameState}/>
            <WordDisplay wordToGuess={wordToGuess} correctLetter={correctLetter} handleCorrectLetterState={handleCorrectLetterState}/>
        </>
    )
}

export default LetterGuess
