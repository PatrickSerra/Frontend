import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    function buttonShowHide(isShown) {
        return isShown ? 'Hide' : 'Show' 
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p>: null}
            <button onClick={toggleShown}>{buttonShowHide(isShown)} punchline</button>
            <hr />
        </div>
    )
}