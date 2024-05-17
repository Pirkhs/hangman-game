
const Graphic = ({gameState}) => {
    return (
    <div className="graphic-section">
        <img className="graphic" src={`/src/game-state-imgs/game-state-${gameState}.png`}/>
    </div>
    )
}

export default Graphic;