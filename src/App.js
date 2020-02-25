import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import View from './components/View'
import NumberButton from './components/NumberButton'
import ActionButton from './components/ActionButton'
import WithStateActionButton from './components/WithStateActionButton'
import { ThemeContext } from './ThemeContext'
import { CalculatorContext } from './CalculatorContext'


function App() {
  const themeContext = useContext(ThemeContext);
  const calculatorContext = useContext(CalculatorContext);
  const [dark, isDark] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log(e.key);
      switch (e.key) {
        case "1": {
          calculatorContext.dispatch({ type: 'number', payload: 1 })
          break;
        }
        case "2": {
          calculatorContext.dispatch({ type: 'number', payload: 2 })
          break;
        }
        case "3": {
          calculatorContext.dispatch({ type: 'number', payload: 3 })
          break;
        }
        case "4": {
          calculatorContext.dispatch({ type: 'number', payload: 4 })
          break;
        }
        case "5": {
          calculatorContext.dispatch({ type: 'number', payload: 5 })
          break;
        }
        case "6": {
          calculatorContext.dispatch({ type: 'number', payload: 6 })
          break;
        }
        case "7": {
          calculatorContext.dispatch({ type: 'number', payload: 7 })
          break;
        }
        case "8": {
          calculatorContext.dispatch({ type: 'number', payload: 8 })
          break;
        }
        case "9": {
          calculatorContext.dispatch({ type: 'number', payload: 9 })
          break;
        }
        case "0": {
          calculatorContext.dispatch({ type: 'number', payload: 0 })
          break;
        }
        case ".": {
          calculatorContext.dispatch({ type: "." })
          break;
        }
        case "enter": {
          calculatorContext.dispatch({ type: "execute" })
          break;
        }
        case "+": {
          calculatorContext.dispatch({ type: 'add'})
          break;
        }
        case "-": {
          calculatorContext.dispatch({ type: 'minus' })
          break;
        }
        case "*": {
          calculatorContext.dispatch({ type: 'times' })
          break;
        }
        case "/": {
          calculatorContext.dispatch({ type: 'divide' })
          break;
        }
        case "c": {
          calculatorContext.dispatch({ type: 'clear' })
          break;
        }
      }
    });
    return () => {
      window.removeEventListener('keydown');
    };
  }, [])

  return (
    <div className="App-container" style={dark ? { background: themeContext.darkBackground } : {}}>
      <div className="App" style={dark ? { background: themeContext.darkPrimary } : {}} >
        <button onClick={() => isDark(!dark)} className="toggle-btn">{dark ? <i className="fas fa-sun"></i> : <i className="far fa-moon"></i>}</button>
        <h1 style={dark ? { color: themeContext.darkFont } : {}}>Calculator</h1>
        <View />
        <div className="panel">
          <ActionButton display={"C"} operation={"clear"} />
          <ActionButton display={"+/-"} operation={"toggle"} />
          <ActionButton display={"%"} operation={"percentage"} />
          <WithStateActionButton display={"+"} operation={"add"} />
          <NumberButton value={7} />
          <NumberButton value={8} />
          <NumberButton value={9} />
          <WithStateActionButton display={"-"} operation={"minus"} />
          <NumberButton value={4} />
          <NumberButton value={5} />
          <NumberButton value={6} />
          <WithStateActionButton display={"\u00d7"} operation={"times"} />
          <NumberButton value={1} />
          <NumberButton value={2} />
          <NumberButton value={3} />
          <WithStateActionButton display={"\u00f7"} operation={"divide"} />
          <NumberButton value={0} />
          <ActionButton display={"."} operation={"."} />
          <ActionButton display={"="} operation={"execute"} />
        </div>
      </div>
    </div>
  );
}

export default App;
