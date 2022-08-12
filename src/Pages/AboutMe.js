import React, {Component} from 'react';

import {Container, Row, Col, Image, Placeholder} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

import '../Components/AboutCSS.css';
import myPhoto from '../assets/myPhoto.jpg'


export default class ExamplesProjects extends Component {
  render() {
    return (
      <div className="fullwidth-bg">
        <Container>
          <Row>
            <Col className="background__image " >
              <Image
                className="image__about"
                src={myPhoto}
                alt="myPhoto"
              />
              <div className="fontsgoogle_2">
                <h3>About me</h3>
                <p>
                  I am a beginner developer. I want to work in web development.
                  Over time, I realized that I want to constantly learn new things.
                  My movement is learning and gaining knowledge. This is probably the biggest motivation in my
                  life.
                  I believe that the IT field is the most appropriate field for self-realization.
                  "Everyone should learn programming because it teaches you to think" - Steve Jobs.
                </p>
                <h3>Hard skills</h3>
                <p>
                  <li>JavaScript;</li>
                  <li>HTML, CSS;</li>
                  <li>NodeJs;</li>
                  <li>Python;</li>
                  <li>Django Framework;</li>
                  <li>SQL;</li>
                  <li>Git;</li>
                  <li>ОС Linux;</li>
                  <li>I understand OOP paradigms;</li>
                  <li>I know English at the level of reading documentation and basic communication;</li>
                  <li>I speak German at the pre-intermediate level (I have a certificate from the
                    Goethe-Institut).
                  </li>
                </p>
                <h3>Soft skills</h3>
                <p>
                  <li>Open and communicative with people (I can work in a team, diplomatic);</li>
                  <li>I take responsibility for tasks and am able to strictly adhere to deadlines;</li>
                  <li>I show flexibility and dedication in work;</li>
                  <li>I know how to take responsibility for myself.</li>
                </p>

              </div>
            </Col>

            {/*<Card className="container__about">*/}
            {/*  <h2>About me</h2>*/}
            {/*  <Card.Img*/}
            {/*    src="https://images.pexels.com/photos/12823097/pexels-photo-12823097.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"*/}
            {/*    alt="Avatar"*/}
            {/*    className="image__about"*/}
            {/*  />*/}
            {/*  <Card.Body>*/}
            {/*    <Card.Text className="overlay__about text__about fontsgoogle">*/}
            {/*      I am a beginner developer. I want to work in web development.*/}
            {/*      Over time, I realized that I want to constantly learn new things.*/}
            {/*      My movement is learning and gaining knowledge. This is probably the biggest motivation in my*/}
            {/*      life.*/}
            {/*      I believe that the IT field is the most appropriate field for self-realization.*/}
            {/*      "Everyone should learn programming because it teaches you to think" - Steve Jobs.*/}
            {/*    </Card.Text>*/}
            {/*  </Card.Body>*/}
            {/*</Card>*/}

            {/*<Card className="projects__card container__about">*/}
            {/*  <h2>Hard Skills</h2>*/}
            {/*  <Card.Img*/}
            {/*    src="https://images.pexels.com/photos/12151766/pexels-photo-12151766.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"*/}
            {/*    alt="Avatar"*/}
            {/*    className="image__about"*/}
            {/*  />*/}
            {/*  <Card.Body>*/}
            {/*    <Card.Text className="overlay__about text__about fontsgoogle">*/}
            {/*      <li>JavaScript;</li>*/}
            {/*      <li>HTML, CSS;</li>*/}
            {/*      <li>Python;</li>*/}
            {/*      <li>Django Framework;</li>*/}
            {/*      <li>SQL;</li>*/}
            {/*      <li>Git;</li>*/}
            {/*      <li>ОС Linux;</li>*/}
            {/*      <li>I understand OOP paradigms;</li>*/}
            {/*      <li>I know English at the level of reading documentation and basic communication;</li>*/}
            {/*      <li>I speak German at the pre-intermediate level (I have a certificate from the*/}
            {/*        Goethe-Institut).*/}
            {/*      </li>*/}
            {/*    </Card.Text>*/}
            {/*  </Card.Body>*/}
            {/*</Card>*/}

            {/*<Card className="projects__card container__about">*/}
            {/*  <h2>Soft Skills</h2>*/}
            {/*  <Card.Img*/}
            {/*    src="https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"*/}
            {/*    alt="Avatar"*/}
            {/*    className="image__about"*/}
            {/*  />*/}
            {/*  <Card.Body>*/}
            {/*    <Card.Text className="overlay__about text__about fontsgoogle">*/}
            {/*      <li>Open and communicative with people (I can work in a team, diplomatic);</li>*/}
            {/*      <li>I take responsibility for tasks and am able to strictly adhere to deadlines;</li>*/}
            {/*      <li>I show flexibility and dedication in work;</li>*/}
            {/*      <li>I know how to take responsibility for myself.</li>*/}
            {/*    </Card.Text>*/}
            {/*  </Card.Body>*/}
            {/*</Card>*/}
          </Row>
        </Container>
      </div>
    );
  }
}