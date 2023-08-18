import React, {useContext,useState} from 'react'

const themeContext = React.createContext()
const themeUpdateContext = React.createContext()

export function useTheme(){
    return useContext(themeContext)
}

export function useThemeUpdate(){
    return useContext(themeUpdateContext)
}

export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(false)
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return(
        <themeContext.Provider value={darkTheme}>
            <themeUpdateContext.Provider value={toggleTheme}>
                {children}
            </themeUpdateContext.Provider>
        </themeContext.Provider>
    )


}