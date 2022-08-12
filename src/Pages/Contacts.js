import React, {Component} from 'react';
import {Form, Button, Container, Placeholder} from 'react-bootstrap'

import '../Components/ContactsCss.css'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '700px'}}>
        {/*отступ от Хедера*/}
        <h1 className="text-center" className="mt-5">Contact me</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Email address </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              We`ll never share your email with anuone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label> Your Message </Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>

          {/*<Form.Group controlId="formBasicCheckbox">*/}
          {/*  <Form.Check type="checkbox" label="Check me out" />*/}
          {/*</Form.Group>*/}
          <Button
            variant="primary"
            type="submit"
            className="submit__button">Submit
          </Button>

        </Form>
      </Container>
    );
  }
}