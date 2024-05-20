import { useState } from 'react'
import Graphic from './Graphic'
import { generate} from "random-words"
import WordDisplay from './WordDisplay'

const LetterGuess = () => {
    
    const [wordToGuess, setWordToGuess] = useState(generate({minLength: 5, maxLength: 5}).toUpperCase())
    const [isGameOver, setIsGameOver] = useState(false)
    const [message, setMessage] = useState("Begin by picking a letter to guess:")
    let [gameState, setGameState] = useState(1)
    const [alphabet, setAlphabet] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ])
    let [wordDisplay, setWordDisplay] = useState("_".repeat(wordToGuess.length))

    console.log(wordToGuess);

    if (wordDisplay === wordToGuess) {
        setWordToGuess("")
        setMessage(`👑 You Won! With ${gameState - 1} incorrect ${gameState  === 2 ? `guess!` : `guesses!`}`)
        setIsGameOver(true)
    }

    const resetGame = () => {
        setWordToGuess(generate({minLength: 5, maxLength: 5}).toUpperCase())
        setIsGameOver(false)
        setGameState(1)
        setMessage('Begin by picking a letter to guess:')
        setAlphabet(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ])
        setWordDisplay("_".repeat(5))
    }

    const handleLetterGuess = (e) => {
        const guessedLetter = e.target.value;
        setAlphabet(currAlphabet => currAlphabet.filter(letter => letter !== guessedLetter ))
        if (wordToGuess.includes(guessedLetter)) handleCorrectlyGuessedLetter(guessedLetter);
        else handleIncorrectlyGuessedLetter();
    }
    
    const handleCorrectlyGuessedLetter = (guessedLetter) => {
        setMessage('✅ Correct, Pick another letter:');
        [...wordToGuess].forEach((letter, index) => {
            if (letter === guessedLetter) {
            setWordDisplay(wordDisplay => wordDisplay.slice(0, index) + guessedLetter + wordDisplay.slice(index + 1))
            }
        })
    }
    
    const handleIncorrectlyGuessedLetter = () => {
        setMessage(`❌ Incorrect, ${9-gameState} ${9-gameState === 1 ? "guess" : "guesses"} left!`)
        setGameState(++gameState)
        if (gameState === 10) {
            setMessage(`🚫 Game Over, The word was ${(wordToGuess).toLowerCase()} `)
            setIsGameOver(true)
        }
    }

    return (
        <>
        <div className="section-letter-guess">

            <p className="message"> {message} </p>

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
            <WordDisplay wordDisplay={wordDisplay}/>
        </>
    )
}

export default LetterGuess
