import React, {Component} from 'react';

import {Container, Row, Card, Button, Placeholder} from 'react-bootstrap';

import '../Components/AboutCSS.css';

export default class MyProjects extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center m-4">
          My Projects
        </h2>
        <Row
          md="3"
          className="projects__row"
        >
          <Card
            className="projects__card"
          >
            <Card.Img
              className="projects__card-img"
              variant="bottom"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>
                Project_1
              </Card.Title>
              <Card.Text>
                "At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
              </Card.Text>
              <Button variant="primary" className="learan__more__body"> Learn more </Button>
            </Card.Body>
          </Card>

          <Card className="projects__card">
            <Card.Img
              className="projects__card-img"
              variant="bottom"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>
                Project_2
              </Card.Title>
              <Card.Text>
                "At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
              </Card.Text>
              <Button variant="primary" className="learan__more__body"> Learn more </Button>
            </Card.Body>
          </Card>

          <Card className="projects__card">
            <Card.Img
              className="projects__card-img"
              variant="bottom"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>
                Project_3
              </Card.Title>
              <Card.Text>
                "At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
              </Card.Text>
              <Button variant="primary" className="learan__more__body"> Learn more </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    );
  }
}


// import React, {Component} from 'react';
//
// import {Button, Card, Container } from 'react-bootstrap';
//
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// import '../Components/MyProjectsCss.css';
//
// export default class MyProjects extends Component {
//   render() {
//     return (
//       <Container >
//         <Card style={{width: '30rem'}} className="blocks__projects">
//
//           <Card.Img variant="top"
//                     src="https://media.istockphoto.com/photos/three-paper-boats-with-different-size-and-colors-diversity-concept-picture-id1355974898?k=20&m=1355974898&s=612x612&w=0&h=V49ewRd3zI_bepJo-rsS_USeqHAvJ66QQnolJXtnAw4="/>
//           <Card.Body>
//             <Card.Title>Project_1</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Learn more</Button>
//           </Card.Body>
//         </Card>
//
//         <Card style={{width: '30rem'}} className="blocks__projects">
//           <Card.Img variant="top"
//                     src="https://media.istockphoto.com/photos/three-paper-boats-with-different-size-and-colors-diversity-concept-picture-id1355974898?k=20&m=1355974898&s=612x612&w=0&h=V49ewRd3zI_bepJo-rsS_USeqHAvJ66QQnolJXtnAw4="/>
//           <Card.Body>
//             <Card.Title>Project_2</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Learn more</Button>
//           </Card.Body>
//         </Card>
//
//         <Card style={{width: '30rem'}} className="blocks__projects">
//           <Card.Img variant="top"
//                     src="https://media.istockphoto.com/photos/three-paper-boats-with-different-size-and-colors-diversity-concept-picture-id1355974898?k=20&m=1355974898&s=612x612&w=0&h=V49ewRd3zI_bepJo-rsS_USeqHAvJ66QQnolJXtnAw4="/>
//           <Card.Body>
//             <Card.Title>Project_2</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Learn more</Button>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }
// }
//
// // export default BasicExample;