import React from "react"
import { ThemeContextProvider } from "./src/contexts/ThemeContext"
import { Global, css } from "@emotion/core"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body,
          html {
            font-family: Roboto Mono, monospace;
            height: 100%;
          }
        `}
      />
      {element}
    </ThemeContextProvider>
  )
}
