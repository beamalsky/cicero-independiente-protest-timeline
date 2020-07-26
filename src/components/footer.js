import React from "react"
import { Col, Row } from 'react-bootstrap'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Nameplate from '../components/nameplate'

const Footer = () => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7}>
            <p class="footer">
              <FormattedMessage id="footer" />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default injectIntl(Footer)
