import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Hero from '../components/hero'
import Language from "../components/language"

const HeaderSection = ({ intl }) => {
  return (
    <StaticQuery
      query={
        graphql`
          query HeaderQuery {
            header: file(relativePath: { eq: "header.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            blm: file(relativePath: { eq: "teddy_waffles_blm.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `
      }
      render={data => (
        <>
          <Hero
            fluid={data.header.childImageSharp.fluid}
          >
            <div style={{
              margin: '33vh auto',
              padding: '4rem 4rem',
              width: '70vw',
              textAlign: 'center',
              backgroundColor: 'black',
              minWidth: '350px',
              maxWidth: '850px'
            }}>
                <Language />
                <h1 style={{color: 'white', fontSize: '2.4rem', fontStyle: 'normal'}}>
                  <FormattedMessage id="hed" />
                </h1>
                <h3 className="dek">
                  <FormattedMessage id="dek" />
                </h3>
                <p className='byline'>
                  <FormattedMessage id="byline" />
                  <br />
                  <FormattedMessage id="byline2" />
                </p>
                <p className='subbyline'>
                  <FormattedMessage id="subbyline" />
                </p>
            </div>
          </Hero>
          <div id="intro" style={{
            backgroundColor: 'white',
            padding: '2rem',
            opacity: '95%'
          }}>
            <Row>
              {
                intl.locale === 'en' &&
                <Col className="main-text-column" xs={12} md={7}>
                  <p>
                    <b>Content Warning: <em>Discussion, images, and videos of police violence</em></b>
                  </p>
                  <p>
                    <span class="dropcap">T</span>he events that happened in Cicero on June 1 will forever be seared in the memories of those who witnessed them. The civil unrest that transpired closely mirrored events from decades before on many of the same streets.
                  </p>
                  <p>
                    After massive protests in response to the police killing of George Floyd prompted Chicago Mayor Lori Lightfoot to close access to downtown, much of the unrest, which included people breaking into stores and damaging property, spread to Cicero.
                  </p>
                  <p>
                    What ensued was chaos. Helicopters flew overhead as armored vehicles blocked major streets. The Illinois State police and the Cook County Sheriff’s office were called in. On nearly every street corner dozens of non-Black Latinx people, many of them armed with bats, clubs, rocks, and other weapons, decided it was their duty to protect local property. Some of these groups targeted Black people who were assumed to be outsiders breaking into local businesses.
                  </p>
                  <p>
                    Cicero quickly started trending nationally on Twitter and media outlets flocked to town to cover the events which left two people dead, at least 60 arrested, many injured and ultimately heightened tension in a community still struggling and traumatized from the COVID-19 crisis.
                  </p>
                  <p>
                    That same week similar scenes of targeted violence towards Black people by non-Black people were happening in other neighborhoods in Chicago such as Little Village, Pilsen, and Bridgeport.
                  </p>
                  <p>
                    Inspired by <a href="https://protesttimeline.southsideweekly.com/">South Side Weekly</a>, we drew on personal testimonies, social media posts, and public records requests to create this timeline and aid in our communal understanding of what went down that weekend and the days after. While no one can ever fully understand why things happened the way they did, we hope our attempt to document this historic day, and the days that followed, can lead to important conversations, transformation and necessary change.
                  </p>
                  <p>
                    What happened on June 1 wasn’t the first time racial violence has happened in Cicero, but it can be the last.
                  </p>
                </Col>
              }
              {
                intl.locale === 'es' &&
                <Col className="main-text-column" xs={12} md={7}>
                  <p>
                    <b>Advertencia de contenido: <em>discusión, imágenes y videos de violencia</em></b>
                  </p>
                  <p>
                    <span class="dropcap">L</span>os eventos que ocurrieron en Cicero el 1 de junio quedarán grabados para siempre en los recuerdos de quienes los presenciaron. Los disturbios civiles que ocurrieron reflejaron eventos que ocurrieron en muchas de las mismas calles en décadas anteriores.
                  </p>
                  <p>
                    Después de protestas masivas en respuesta al asesinato policial de George Floyd, la alcalde de Chicago, Lori Lightfoot, cerró el acceso al centro de la ciudad, haciendo que gran parte de los disturbios, que incluyeron a personas que irrumpieron en tiendas y dañaron propiedades, se extendieron a Cicero.
                  </p>
                  <p>
                    Lo que siguió fue el caos. Helicópteros sobrevolaron mientras vehículos blindados bloquearon las calles principales. Se les llamó a la policía del estado de Illinois y a la oficina del sheriff del condado de Cook. En casi todas las esquinas de las calles, docenas de personas Latinxs no negras, muchos de ellos armados con bates, palos, rocas y otras armas, decidieron que era su deber proteger a las propiedades locales. Algunos de estos grupos atacaron a personas negras suponiendo que eran personas ajenas que estaban aquí con la intención de saquear negocios locales.
                  </p>
                  <p>
                    Cicero rápidamente comenzó a tener tendencia nacional en Twitter y los medios de comunicación acudieron al town para cubrir los eventos que dejaron dos personas muertas, al menos 60 arrestadas, muchas heridas y, en última instancia, aumentaron la tensión en una comunidad que todavía lucha y está traumatizada por la crisis de COVID-19.
                  </p>
                  <p>
                    Esa misma semana, en otros barrios de Chicago, como Little Village, Pilsen y Bridgeport, ocurrían escenas similares de violencia dirigida contra personas negras por personas no negras.
                  </p>
                  <p>
                    Inspirado por <a href="https://protesttimeline.southsideweekly.com/">South Side Weekly</a>, recurrimos a testimonios personales, publicaciones en redes sociales y solicitudes de registros públicos para crear esta línea de tiempo y ayudar a nuestra comprensión comunitaria de lo que sucedió ese fin de semana y los días posteriores. Si bien nadie puede entender completamente por qué las cosas sucedieron de la manera en que sucedieron, esperamos que nuestro intento de documentar este día histórico pueda conducir a conversaciones importantes, transformación y cambios necesarios.
                  </p>
                  <p>
                    Lo que sucedió el 1 de junio no fue la primera vez que ocurrió violencia racial en Cicero, pero puede ser la última.
                  </p>
                </Col>
              }
            </Row>
          </div>
        </>
      )
      }
    />
  )
}

export default injectIntl(HeaderSection)
