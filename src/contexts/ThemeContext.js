import React,{ useState } from 'react'

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
            link: '#6c63ff',
            blockquoteBackground: '#f8f8f8',
            titleBannerBackground: '#fff'
        },
        darkMode : {
            background: '#363537',
            primary: '#fafafa',
            toggleButton: '#cbd5e0',
            hoverText:'#666',
            link:'#bcb8ff',
            blockquoteBackground: '#6c6c6c',
            titleBannerBackground: '#727171'
            
        }
    }
    
    const themeColor = isDark? theme.darkMode: theme.lightMode
    
    return (
      <ThemeContext.Provider value={{ themeColor, isDark, toggleMode}}>
        {props.children}
      </ThemeContext.Provider>
    );
  };