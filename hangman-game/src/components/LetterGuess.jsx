import { useState } from 'react'
import Graphic from './Graphic'
import { generate} from "random-words"
import WordDisplay from './WordDisplay'

const LetterGuess = () => {
    const [wordToGuess, setWordToGuess] = useState(generate({minLength: 5, maxLength: 5}).toUpperCase())
    const [isGameOver, setIsGameOver] = useState(false)
    const [message, setMessage] = useState("Begin by picking a letter to guess:")
    let [gameState, setGameState] = useState(1)
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
    console.log(wordToGuess);
    
    const resetGame = () => {
        setWordToGuess(generate({minLength: 5, maxLength: 5}).toUpperCase())
        setIsGameOver(false)
        setGameState(1)
        setMessage('Begin by picking a letter to guess:')
    }

    const handleLetterGuess = (e) => {
        const guessedLetter = e.target.value;
        if (wordToGuess.includes(guessedLetter)) handleCorrectlyGuessedLetter();
        else handleIncorrectlyGuessedLetter();
    }
    
    const handleCorrectlyGuessedLetter = () => {
        setMessage('✅ Correct, Pick another letter:')
    }

    const handleIncorrectlyGuessedLetter = () => {
        setMessage(`❌ Incorrect, ${9-gameState} guesses left`)
        setGameState(++gameState)
        if (gameState === 10) {
            setMessage('🚫 Game Over, You Lose :(')
            setIsGameOver(true)
        }
    }

    return (
        <>
        <div className="letter-guess">
                <p> {message} </p>

                { isGameOver ? <button className="btn-reset" onClick={() => {resetGame()}}> Play Again </button> : ""}

                <div className="letter-options">
                {alphabet.map(letter => {
                    return (
                        <button className="button-letter" key={letter} value={letter} onClick={(e) => {handleLetterGuess(e)}} > {letter} </button>  
                    )
                })}
                </div>
            </div>
            <Graphic gameState={gameState}/>
            <WordDisplay wordToGuess={wordToGuess}/>
        </>
    )
}

export default LetterGuess
