import PropTypes from "prop-types"
import React from "react"
import { IntlContextConsumer, changeLocale, FormattedMessage } from "gatsby-plugin-intl"
import cn from "classnames"

const Header = ({ siteTitle }) => (
  <header>
    <h1>{siteTitle}</h1>

    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div className="langs">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => changeLocale(lang)}
              className={cn({ active: currentLocale === lang })}
            >
              <FormattedMessage id={lang} />
            </button>
          ))}
        </div>
      )}
    </IntlContextConsumer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
