import React, { useContext } from 'react'
import { CalculatorContext } from '../CalculatorContext'

function View() {
    const calculatorContext = useContext(CalculatorContext);
    return (
        <div className="view-container">
            <div className="view">
                {calculatorContext.output}
            </div>
        </div>
    )
}

export default View
