import React from "react"
import { ThemeContextProvider } from "./src/contexts/ThemeContext"
import { MDXProvider } from "@mdx-js/react"
// import { preToCodeBlock } from 'mdx/utils'
import { Global, css } from "@emotion/core"
import Code from './src/components/code'
import './language-tabs.css'

function preToCodeBlock(preProps) {
  if (
    // children is MDXTag
    preProps.children &&
    // MDXTag props
    preProps.children.props &&
    // if MDXTag is going to render a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const props = preProps.children.props;
    const codeString = props.children;
    // console.log(props)
    // console.log(props.className.split("-")[1])
    return {
      codeString: codeString.trim(),
      // language: 'javascript',
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
