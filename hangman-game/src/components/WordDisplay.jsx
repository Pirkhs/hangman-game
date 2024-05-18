import { useState, useEffect } from 'react'

const WordDisplay = ({wordToGuess, correctLetter, handleCorrectLetterState}) => {
    const [trackCurrentWord, setTrackCurrentWord] = useState("_".repeat(wordToGuess.length)) 
    
    useEffect(() => {
        if (correctLetter) {

            // Create an array of all the indexes at which the guessed letter is found in the word
            const indices = []
            for (let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === correctLetter) indices.push(i)
            }
    
            // Go through the indices array and replace the letter at that index with the correctLetter 
            for (const index of indices) {
                console.log(trackCurrentWord.slice(0, index) + correctLetter + trackCurrentWord.slice(index + 1));
                setTrackCurrentWord(trackCurrentWord.slice(0, index) + correctLetter + trackCurrentWord.slice(index + 1))
            }
        }
        handleCorrectLetterState(undefined)
    }, [])

    return (
        <div className="word-display">
            <h2> {Array.from(trackCurrentWord).join(" ")} </h2>
        </div>
    )
}

export default WordDisplay
