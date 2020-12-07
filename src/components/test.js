import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

const Test = ({ intl }) => {

  return (
    <div>{intl.formatMessage({ id: "email_input" })}</div>
  )
}

export default injectIntl(Test);
