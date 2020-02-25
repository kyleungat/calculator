import React, {useReducer} from 'react'
import CalculatorReducer from './CalculatorReducer'

const CalculatorContext = React.createContext();

function CalculatorContextProvider(props) {
    const [output, dispatch] = useReducer(CalculatorReducer, {outputArr: [{value: 0, operator: 'add'}], temp: {value: 0, operator:'add'}, previousInput: 0});

    return (
        <CalculatorContext.Provider value={{
            output: output.temp.value,
            dispatch: dispatch,
            activeOperator: output.previousInput,
        }}>
            {props.children}
        </CalculatorContext.Provider>
    )
}

export {CalculatorContext, CalculatorContextProvider};