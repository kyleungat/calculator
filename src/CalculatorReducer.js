const executeReducer = (accumlate, currentValue, index, arr) => {
    if ((currentValue.operator === "add" &&
        (arr[index + 1] && (arr[index + 1].operator === "add" || arr[index + 1].operator === "minus"))) ||
        (currentValue.operator === "add" && index === arr.length - 1)
    ) {
        return [accumlate[0] + currentValue.value, accumlate[1]];
    }
    if ((currentValue.operator === "minus" &&
        (arr[index + 1] && (arr[index + 1].operator === "add" || arr[index + 1].operator === "minus"))) ||
        (currentValue.operator === "minus" && index === arr.length - 1)
    ) {
        return [accumlate[0] - currentValue.value, accumlate[1]];
    }

    if ((currentValue.operator === "add" || currentValue.operator === "minus") &&
        (arr[index + 1] &&
            (arr[index + 1].operator === "times" || arr[index + 1].operator === "divide"))
    ) {
        console.log("here");
        return [accumlate[0] + accumlate[1], currentValue.value];
    }
    if (currentValue.operator === "times") {
        return [accumlate[0], accumlate[1] * currentValue.value];
    }
    if (currentValue.operator === "divide") {
        return [accumlate[0], (accumlate[1] / currentValue.value)];
    }

    return accumlate;
};

const CalculatorReducer = (state, action) => {
    switch (action.type) {
        case "number": {
            // previous is number and value is not zero
            if (!isNaN(state.previousInput) && state.temp.value !== 0) {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        value: Number(state.temp.value.toString() + action.payload),
                    },
                    previousInput: action.payload,
                }
            }
            // previous is not number
            else {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        value: action.payload,
                    },
                    previousInput: action.payload,
                }
            }
        }

        case "add": {
            if (!isNaN(state.previousInput) || (isNaN(state.previousInput) && isNaN(state.temp.value))) {
                return {
                    outputArr: [...state.outputArr, { value: state.temp.value, operator: state.temp.operator }],
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
            else {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
        }
        case "minus": {
            if (!isNaN(state.previousInput) || (isNaN(state.previousInput) && isNaN(state.temp.value))) {
                return {
                    outputArr: [...state.outputArr, { value: state.temp.value, operator: state.temp.operator }],
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
            else {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
        }
        case "times": {
            if (!isNaN(state.previousInput) || (isNaN(state.previousInput) && isNaN(state.temp.value))) {
                return {
                    outputArr: [...state.outputArr, { value: state.temp.value, operator: state.temp.operator }],
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
            else {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
        }
        case "divide": {
            if (!isNaN(state.previousInput) || (isNaN(state.previousInput) && isNaN(state.temp.value))) {
                return {
                    outputArr: [...state.outputArr, { value: state.temp.value, operator: state.temp.operator }],
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
            else {
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        operator: action.type,
                    },
                    previousInput: action.type,
                }
            }
        }
        case "toggle": {
            return {
                ...state,
                temp: {
                    ...state.temp,
                    value: state.temp.value * -1,
                },
            }
        }
        case "percentage": {
            return {
                ...state,
                temp: {
                    ...state.temp,
                    value: state.temp.value / 100,
                },
            }
        }
        case ".": {
            if (state.temp.value.toString().indexOf(".") === -1){
                return {
                    ...state,
                    temp: {
                        ...state.temp,
                        value: state.temp.value.toString() + "." ,
                    },
                }
            }
            return {
                ...state,
            }
        }
        case "clear": {
            // number: clear the temp value to 0
            // operator: set previous input to clear
            // clear: reset to default
            if (!isNaN(state.previousInput) || (isNaN(state.previousInput) && isNaN(state.temp.value))) {
                return {
                    ...state,
                    temp :{
                        ...state.temp,
                        value: 0,
                    }
                }
            }
            if (state.previousInput === "add" || state.previousInput === "minus" ||
            state.previousInput === "times" || state.previousInput === "divide") {
                return {
                    ...state,
                    previousInput: "clear",
                }
            }
            if (state.previousInput === "clear"){
                return {outputArr: [{value: 0, operator: 'add'}], temp: {value: 0, operator:'add'}, previousInput: 0};
            }

            return {
                ...state,
            }
    }
        case "execute": {
    console.log("state.temp", state.temp);
    console.log("state.outputArr", state.outputArr);
    const result = state.outputArr.concat(state.temp);
    console.log("result", result);

    const finalResultObject = result.reduce(executeReducer, [0, 0]);
    const finalResult = finalResultObject[0] + finalResultObject[1];
    console.log("finalResultObject[0]", finalResultObject[0]);
    console.log("finalResultObject[1]", finalResultObject[1]);
    return {
        outputArr: [],
        temp: {
            operator: "add",
            value: finalResult,
        },
        previousInput: finalResult,
    }
}

        default: return state;
    }
}

export default CalculatorReducer;



