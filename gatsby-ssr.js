import React from "react"
import { theme, ThemeContext } from "./src/contexts/ThemeContext"
import { ThemeProvider } from 'emotion-theming'


export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
