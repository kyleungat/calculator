import React from 'react'

const defaultTheme = {
    darkBackground: "#121212",
    darkPrimary: "#414141",
    darkFont: "#ffffff",
}
const ThemeContext = React.createContext(defaultTheme);

function ThemeContextProvider (props) {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeContextProvider};