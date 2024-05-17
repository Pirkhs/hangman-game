import { useState } from 'react'

const WordDisplay = ({wordToGuess}) => {
    const [trackCurrentWord, setTrackCurrentWord] = useState("_ ".repeat(wordToGuess.length)) 
    return (
        <div className="word-display">
            <h2> {trackCurrentWord} </h2>
        </div>
    )
}

export default WordDisplay