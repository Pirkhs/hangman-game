import { useState } from 'react'

const Graphic = () => {
    const [gameState, setGameState] = useState(1)
    return (
    <div className="graphic">
        <img src={`../game-state-imgs/game-state-${gameState}.png`}/>
    </div>
    )
}

export default Graphic;