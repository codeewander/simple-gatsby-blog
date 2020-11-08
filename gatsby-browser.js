import React from "react"
import { theme, ThemeContextProvider, ThemeContext } from "./src/contexts/ThemeContext"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyles = createGlobalStyle`
     * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
    }
    body, html{
        font-family: Roboto Mono, monospace;
        height: 100%;
    }
`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      {element}
    </ThemeContextProvider>
  )
}
