import './Header.css'

const OptionItem = ({ optionType, optionValue, handleOption, optionCounter }) => {
    return (
        <div className="optionItem">
            <span className="optionText">{optionType}</span>
            <div className="optionCounter">
                <button
                    className="optionCounterButton"
                    onClick={() => handleOption(optionValue, "d")}
                    disabled={optionCounter <= 0}

                >
                    -
                </button>
                <span className="optionCounterNumber">{optionCounter}</span>
                <button
                    className="optionCounterButton"
                    onClick={() => handleOption(optionValue, "i")}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export { OptionItem };