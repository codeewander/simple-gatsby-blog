import React, { useContext } from "react"
import { css } from "emotion"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import IconButton from "@material-ui/core/IconButton"
import { ThemeContext } from "../contexts/ThemeContext"

const languageName = {
  en: "EN",
  "zh-TW": "TW",
}

const Language = () => {
  const { isDark, themeColor } = useContext(ThemeContext)
  const style ={
    iconButton: css`
      font-size: 14px !important;
      line-height: 22px;
      width: 36px;
      height: 36px;
      padding: 6px;
      color: ${themeColor.primary} !important;
      background-color: ${themeColor.languageButtonBackground} !important;
      margin-left: 10px !important
    `
  }
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages
            .filter(lang => lang !== currentLocale)
            .map(language => (
              <IconButton
                aria-label="delete"
                className={style.iconButton}
                onClick={() => changeLocale(language)}
                key={language}
              >
                {languageName[language]}
              </IconButton>
            ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
