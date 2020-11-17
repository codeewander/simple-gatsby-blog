import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import IconButton from "@material-ui/core/IconButton"

const languageName = {
  en: "EN",
  tw: "TW",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages
            .filter(lang => lang !== currentLocale)
            .map(language => (
              <IconButton
                aria-label="delete"
                style={{ fontSize: "14px", padding: "6px" }}
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
