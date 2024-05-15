import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import LetterGuess from './components/LetterGuess'
import WordDisplay from './components/WordDisplay'
import Graphic from './components/Graphic'

const App = () => {
  return (
  <>
    <Header/>
    <LetterGuess/>
    <WordDisplay/>
    <Graphic/>
  </>
  )
}

export default App
