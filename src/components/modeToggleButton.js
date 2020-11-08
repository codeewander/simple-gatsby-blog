import React,{ useContext } from "react"
import { css } from "@emotion/core"
import { ThemeContext } from '../contexts/ThemeContext'

const ModeToggleButton = ( ) => {
  const {themeColor, isDark, toggleMode } = useContext(ThemeContext);
  const toggleButton = css`
    opacity: 0.65;
    position: relative;
    border-radius: 5px;
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    appearance: none;
    background: none;
    &:hover {
      opacity: 1;
    }
    .icon {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: ${isDark ? `4px solid ${themeColor.toggleButton}` : "none"};
      background-color: ${isDark ? `${themeColor.toggleButton}` : "transparent"};
      transform: ${isDark ? "scale(0.55)" : "scale(1)"};
      transition: all 0.45s ease 0s;
      overflow: ${isDark ? "visible" : "hidden"};
      box-shadow: ${isDark ? "none" : `inset 8px -8px 0px 0px ${themeColor.toggleButton}`};
      &:before {
        content: "";
        position: absolute;
        right: -9px;
        top: -9px;
        height: 24px;
        width: 24px;
        border: ${isDark ? `2px solid ${themeColor.toggleButton}` : "none"};
        border-radius: 50%;
        transform: ${isDark ? "translate(14px, -14px)" : "translate(0, 0)"};
        opacity: ${isDark ? 0 : 1};
        transition: transform 0.45s ease 0s;
      }
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 ${themeColor.toggleButton}, 0 23px 0 ${themeColor.toggleButton}, 23px 0 0 ${themeColor.toggleButton}, -23px 0 0 ${themeColor.toggleButton}, 15px 15px 0 ${themeColor.toggleButton}, -15px 15px 0 ${themeColor.toggleButton}, 15px -15px 0 ${themeColor.toggleButton}, -15px -15px 0 ${themeColor.toggleButton};
      }
    }
  `
  return (
    <button
      onClick={toggleMode}
      type="button"
      aria-label={isDark ? "Light Mode" : "Dark Mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      css={toggleButton}
    >
      <div className="icon"></div>
    </button>
  )
}


export default ModeToggleButton