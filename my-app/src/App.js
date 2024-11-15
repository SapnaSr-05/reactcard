import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container,
  } from 'reactstrap';
import download from './images/download.jpg'
import slider from './images/slider.jpg'
import slider1 from './images/slider1.jpg'
import coosiler from './images/coosiler3.jpg'
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" height="300px" src={download} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>


          <Col md={3}>
            <Card>
              <CardImg top width="100%" height="300px" src={slider} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <CardImg top width="100%" height="300px" src={coosiler} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>


          <Col md={3}>
            <Card>
              <CardImg top width="100%" height="300px" src={slider1} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
