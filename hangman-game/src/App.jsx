import { useState } from 'react'
import './App.css'
import Header from "../components/Header"
import WordDisplay from "../components/WordDisplay"
import Graphic from "../components/Graphic"
import LetterGuess from '../components/LetterGuess'

const App = () => {
  return (
  <>
    <Header/>
    <Graphic/>
    <WordDisplay/>
    <LetterGuess/>
  </>
  )
}

export default App
