import React, {useContext} from 'react'
import {CalculatorContext} from '../CalculatorContext'

function NumberButton({value}) {
    const calculatorContext = useContext(CalculatorContext);

    return (
        <button className={value === 0? "btn number-btn span-2":"btn number-btn"} onClick={() => calculatorContext.dispatch({type: 'number', payload: value})} >
            {value} 
        </button>
    );
}


export default NumberButton;
