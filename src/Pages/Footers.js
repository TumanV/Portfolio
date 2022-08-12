import React, {Component} from 'react';
import {Col, Row, Button, Container, Placeholder, Image} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../Components/FootersCss.css';

import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.png'

export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <Placeholder as="p" animation="glow">
          <Placeholder/>
        </Placeholder>
        <Row>
          <Col>
            <div className="footer__copyright">©2022 Webdev - All Rights Reserved</div>
            <div >
              <Button
                variant="light"
                className="footer__margin"
                href="https://www.instagram.com/tuman_viktor/">
                <Image
                  src={Instagram}
                  alt="Tuman Viktor on Instagram"
                />
              </Button>
              <Button
                variant="light"
                className="footer__margin"
                href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D1%82%D1%83%D0%BC%D0%B0%D0%BD-181204211/"
              >
                <Image
                  className="linkedin"
                  src={Linkedin}
                  alt="Tuman Viktor on Linkedin"
                />
              </Button>
              <Button
                variant="light"
                className="footer__margin"
                href="https://www.facebook.com/viktor.tuman"
              >
                <Image
                  src={Facebook}
                  alt="Tuman Viktor on Facebook"
                  />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
  );
  }
  }




