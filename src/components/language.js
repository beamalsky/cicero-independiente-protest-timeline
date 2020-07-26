import React from "react"
import styled from "styled-components"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español",
}

const Link = styled.a`
  background: none;
  border: none;
  color: white !important;
  text-decoration: none;
  padding: 0 .3rem;
  &.active {
    color: #dd2d26 !important;
    background-color: black;
    text-decoration: underline;
  }
`

const Language = () => {
  return (<div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <Link
            key={language}
            onClick={() => changeLocale(language)}
            className={currentLocale === language ? `active` : null}
          >
            {languageName[language]}
          </Link>
        ))
      }
    </IntlContextConsumer>
  </div>)
}

export default Language
