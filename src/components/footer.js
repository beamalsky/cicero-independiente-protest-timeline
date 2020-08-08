import React from "react"
import { Col, Row } from 'react-bootstrap'
import { injectIntl } from "gatsby-plugin-intl"

import Nameplate from '../components/nameplate'

const Footer = ({ intl }) => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          { intl.locale === 'en' &&
            <Col className="main-text-column" xs={12} md={7} style={{padding: '1rem 2.5rem'}}>
              <Nameplate />
              <p class="footer">
                This timeline is part of a package of stories put together by <a href="https://www.ciceroindependiente.com/">Cicero Independiente</a>, a bilingual news organization by and for Cicero residents.
              </p>
              <p class="footer">
                You can view the entire series <b>Unrest in Cicero: How One Day Shook a Town</b> at <a href="https://www.ciceroindependiente.com/unrest-in-cicero-how-one-day-shook-a-town">this link</a>. It includes this timeline of events, <a href="https://www.ciceroindependiente.com/cicero-protest-series-2020/black-cicero-residents-react-to-june-1-unrest">reactions and experiences</a> of Black residents, <a href="http://www.ciceroindependiente.com/cicero-protest-series-2020/a-life-taken-in-cicero">a profile</a> of one of the young men killed, <a href="http://www.ciceroindependiente.com/cicero-protest-series-2020/opinion-we-dont-have-to-repeat-ciceros-racist-history">an examination</a> of Cicero’s history of racial violence, a look at <a href="http://www.ciceroindependiente.com/cicero-protest-series-2020/discussing-black-lives-matter-with-older-generations-cicero-and-berwyn-youth-share-perspectives">generational differences</a> within Latinx families, a feature on the many protests that happened after June 1, and much more.
              </p>
              <p class="footer">
                Thank you to the many Cicero and Berwyn residents who shared their experiences with us to create this project and who have been organizing ever since to address what happened. We hope that this documentation of what occured will aid us as we seek to transform our town into a place that is truly a safe place for us all to live and to thrive. Our histories may be painful but we are not bound by them.
              </p>
              <p class="footer">
                Let us know what you think by filling out <a href="https://airtable.com/shrdXZ96fV5VLsLBI">this form</a> or by emailing us at <a href="mailto:info@ciceroindependiente.com">info@ciceroindependiente.com</a>. These bilingual stories will be printed and distributed around our town, you can support those efforts by making a donation <a href="https://donorbox.org/cicero-independiente">here</a>.
              </p>
              <p class="footer">
                We would also like to thank South Side Weekly for inspiring our journalism, Luis Velazquez, Abel Rodriguez, Leslie Hurtado for your fact-checking support and contributions. Jayre Vazquez and Elida Ortiz for helping us translate and everyone else who will read and engage with this effort.
              </p>
              <p class="footer">
                You can follow us on <a href="https://www.facebook.com/CiceroIndependiente">Facebook</a>, <a href="https://www.instagram.com/ciceroindependiente/">Instagram</a> and <a href="https://twitter.com/CiceroNoticias">Twitter</a> or sign up for our <a href="https://www.ciceroindependiente.com/subscribe">newsletter</a> to stay connected.
              </p>
            </Col>
          }
          { intl.locale === 'es' &&
            <Col className="main-text-column" xs={12} md={7} style={{padding: '1rem 2.5rem'}}>
              <Nameplate />
              <p class="footer">
                Esta línea de tiempo es parte de un paquete de historias elaborado por Cicero Independiente, una organización de noticias bilingüe por y para los residentes de Cicero.
              </p>
              <p class="footer">
                Puedes ver la serie completa <b>Disturbios en Cicero: Cómo un Día Agitó a Un Pueblo</b> en este enlace. La serie incluye esta línea de tiempo de eventos, reacciones y experiencias de residentes Negros, un perfil de uno de los jóvenes asesinados, un examen de la historia de violencia racial en Cicero, una mirada a las diferencias generacionales dentro de las familias Latinx, un relato sobre las muchas protestas que sucedieron.después del 1 de junio y mucho más.
              </p>
              <p class="footer">
                Gracias a los muchos residentes de Cicero y Berwyn que compartieron sus experiencias con nosotros para crear este proyecto. Gracias también a los que han estado organizando desde entonces para abordar lo sucedido. Esperamos que esta documentación de lo ocurrido nos ayude en nuestro intento de transformar a nuestra Town de Cicero en un lugar que sea verdaderamente un lugar seguro para que todos vivamos y prosperemos. Nuestras historias pueden ser dolorosas, pero no estamos atadas por ellas.
              </p>
              <p class="footer">
                Háganos saber lo que piensa sobre este esfuerzo llenando este <a href="https://airtable.com/shrdXZ96fV5VLsLBI">formulario</a> o enviándonos un correo electrónico a info@ciceroindependiente.com. Estas historias bilingües se imprimirán y serán distribuidas por todo Cicero, puedes apoyar esos esfuerzos haciendo una donación <a href="https://donorbox.org/cicero-independiente">aquí</a>.
              </p>
              <p class="footer">
                También nos gustaría agradecer a South Side Weekly por inspirar nuestro periodismo. Luis Velázquez, Abel Rodríguez, Leslie Hurtado por su apoyo y contribuciones en la verificación de datos. Jayre Vázquez y Elida Ortiz por ayudarnos a traducir y a todos los demás qué leerán y participarán en este esfuerzo.
              </p>
              <p class="footer">
                Siganos en <a href="https://www.facebook.com/CiceroIndependiente">Facebook</a>, <a href="https://www.instagram.com/ciceroindependiente/">Instagram</a> y <a href="https://twitter.com/CiceroNoticias">Twitter</a> o inscribase para recibir nuestros <a href="https://www.ciceroindependiente.com/subscribe">informes</a>.
              </p>
            </Col>
          }
        </Row>
      </div>
    </div>
  )
}

export default injectIntl(Footer)
