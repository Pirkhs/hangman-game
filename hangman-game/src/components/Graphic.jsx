
const Graphic = ({gameState}) => {
    const imageMapper = {
        1: "df21J8Q",
        2: "jwQqn1b",
        3: "7kH2z94",
        4: "sVCSx9w",
        5: "F5krxJt",
        6: "h1HRGLS",
        7: "sbLQZNC",
        8: "ZLLT6Lm",
        9: "7y63yJJ",
        10: "r4LRHxc",
    }

    return (
    <div className="graphic-section">
        <img className="graphic" src={`https://i.ibb.co/${imageMapper[gameState]}/game-state-${gameState}.png`}/>
    </div>
    )
}

export default Graphic;
