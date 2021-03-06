import React from "react"
import { ThemeContextProvider } from "./src/contexts/ThemeContext"
import { MDXProvider } from "@mdx-js/react"
import { Global, css } from "@emotion/core"
import Code from './src/components/code'

function preToCodeBlock(preProps) {
  if (
    // children is MDXTag
    preProps.children &&
    // MDXTag props
    preProps.children.props &&
    // if MDXTag is going to render a <code>
    preProps.children.props.mdxType === "code"
  ) {
    const props = preProps.children.props;
    const codeString = props.children;

    return {
      codeString: codeString.trim(),
      language: props.hasOwnProperty('className')? props.className.split("-")[1]: 'javascript',
      ...props
    };
  }
}

const components = {
  pre: preProps=>{
    const props =preToCodeBlock(preProps)
    if(props){
      return <Code {...props}/>
    }

    return <pre {...preProps}/>
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
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
              font-family: Roboto Mono, monospace, Noto Sans TC;
              height: 100%;
            }
          `}
        />
        {element}
      </ThemeContextProvider>
    </MDXProvider>
  )
}
