import { useState } from 'react'
import { generate, count } from "random-words";

const WordDisplay = () => {
    const wordToGuess = generate({minLength: 5, maxLength: 5})

    const [trackCurrentWord, setTrackCurrentWord] = useState("_ ".repeat(wordToGuess.length)) 
    return (
        <div className="word-display">
            <h2> {trackCurrentWord} </h2>
        </div>
    )
}

export default WordDisplay