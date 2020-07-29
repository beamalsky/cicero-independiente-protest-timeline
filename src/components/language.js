import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español",
}

const Language = () => {
  return (<div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <a
            key={language}
            onClick={() => changeLocale(language)}
            className={currentLocale === language ? `active` : null}
            id="language-picker"
          >
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>)
}

export default Language
