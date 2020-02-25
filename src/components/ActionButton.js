import React, {useContext} from 'react'
import {CalculatorContext} from '../CalculatorContext'

function ActionButton({display, operation}) {
    const calculatorContext = useContext(CalculatorContext);

    return (
        <button className={display === "."? "btn number-btn":"btn action-btn"} onClick={() => calculatorContext.dispatch({type:operation})}>
            {operation === "clear" && calculatorContext.activeOperator === "clear" ? "AC": display}
        </button>
    )
}

export default ActionButton
