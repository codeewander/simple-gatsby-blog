import React,{ useState } from 'react'

export const theme = {
    fonts: {
        main: "sans-serif",
        code: "Roboto Mono, monospace",
    },
    lightMode :{
        background: '#fff',
        primary: '#363537',
        hoverText:'#666',
        toggleButton: '#2d3748',
    },
    darkMode : {
        background: '#363537',
        primary: '#fafafa',
        toggleButton: '#cbd5e0',
        hoverText:'#666'
    }
}


export const ThemeContext = React.createContext()

export const ThemeContextProvider = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = (e)=>{
        e.preventDefault()
        setIsDark(!isDark)
    }

    const theme = {
        lightMode :{
            background: '#fff',
            primary: '#363537',
            hoverText:'#666',
            toggleButton: '#2d3748',
        },
        darkMode : {
            background: '#363537',
            primary: '#fafafa',
            toggleButton: '#cbd5e0',
            hoverText:'#666'
        }
    }
    
    const themeColor = isDark? theme.darkMode: theme.lightMode
    
    return (
      <ThemeContext.Provider value={{ themeColor, isDark, toggleMode}}>
        {props.children}
      </ThemeContext.Provider>
    );
  };