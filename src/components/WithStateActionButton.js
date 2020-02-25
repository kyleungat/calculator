import React, { useContext } from 'react'
import { CalculatorContext } from '../CalculatorContext'


function WithStateActionButton({ display, operation }) {
    const calculatorContext = useContext(CalculatorContext);

    const handleClick = () => {
        calculatorContext.dispatch({ type: operation })
    };

    return (
        <button className={calculatorContext.activeOperator === operation ? "active btn state-action-btn" : "btn state-action-btn"} onClick={handleClick}>
            {display}
        </button>
    )
}
export default WithStateActionButton;
