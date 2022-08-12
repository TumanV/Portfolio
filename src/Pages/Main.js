import React, {Component} from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="/" className="fontsgoogle_1">
              <h3>Tuman Viktor<br/></h3>
              <h5>Junior Web Developer</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
              {/*кнопки меню слева*/}
              <Nav className="ml-auto fontsgoogle_2">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/"> About me </Nav.Link>
                <Nav.Link href="/"> Contacts </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}