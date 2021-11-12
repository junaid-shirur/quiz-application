import React from 'react'
import './style.scss'

export default function Questions() {
    return (
        <>
            <h3>Instructions</h3>
        <div className="rules" >
            <p>
                * the quiz will be immediatly starts when you click the start button
            </p>
            <p>
                * you have to choose one option from the given options.
            </p>
            <p>
                * click next for next question, once next is clicked you could not go back.
            </p>
            <p>
                * when the timer 00 the quiz will be end.
            </p>
            <p>
                * the results will  be displayed immediatly
            </p>
            <button>start</button>
            </div>
        </>
    )
}
