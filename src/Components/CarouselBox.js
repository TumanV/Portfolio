import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel';

import driveImg from '../assets/drive.jpg'
import mountainImg from '../assets/mountain.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img height="700"
               className="d-block w-100"
               src={driveImg}
               alt="drive"
          />
          {/*текст внутри карусели*/}
          <Carousel.Caption>
            <h2>My name is Viktor Tuman</h2>
            <h2>And I`m Junior Web Developer.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="700"
            className="d-block w-100"
            src={mountainImg}
            alt="drive"
          />
          <Carousel.Caption>
            <h2>My path is new challenges.</h2>
            <h2>And I know it's not easy.</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// export default  CarouselBox;