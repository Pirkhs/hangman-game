import { useState } from 'react'
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

const letterOptions = (   
    <form>
        {alphabet.map(letter => {
        return (
            <button key={letter} > {letter} </button>  
        )
    })}
    </form>
    
)

const LetterGuess = () => {
   
    return (
        <div className="letter-guess">
            <p> Pick a Letter to Guess </p>
            {letterOptions}
        </div>
    )
}

export default LetterGuess
