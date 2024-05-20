
const WordDisplay = ({wordDisplay}) => {

    return (
        <div className="word-display">
            <h2> {Array.from(wordDisplay).join(" ")} </h2>
        </div>
    )
}

export default WordDisplay
