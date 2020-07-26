import React from "react"
import { Col, Row } from 'react-bootstrap'

import Nameplate from '../components/nameplate'

const Footer = () => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7}>
            <p class="footer">
              Footer text TK
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
