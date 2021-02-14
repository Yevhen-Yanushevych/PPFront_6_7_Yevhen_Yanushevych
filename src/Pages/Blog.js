import React, { Component } from "react";
import { Container, Media, Row, Col, ListGroup, Card } from "react-bootstrap";
import Dog from '../assets/Dog.jpg'

export default class Blog extends Component {

    constructor(props){
        super(props)
       
        this.OnWheel = this.OnWheel.bind(this)
        
        this.state = {counter:0}
        
        
    }

    OnWheel(){
        this.setState({counter: ++this.state.counter})
      }

  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src={Dog} />
              <Media.Body onWheel={this.OnWheel}>
                <h5>Blog post (Wheel:{this.state.counter})</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src={Dog} />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src={Dog} />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img width={150} height={150} className="mr-3" src={Dog} />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
              <h5 className="text-center mt-5">Categories</h5>
              <Card>
                  <ListGroup variant="flush">
                      <ListGroup.Item>Animals</ListGroup.Item>
                      <ListGroup.Item>Nature</ListGroup.Item>
                      <ListGroup.Item>People</ListGroup.Item>

                  </ListGroup>
              </Card>
              <Card className="mt-3" bg="light">
                  <Card.Body>
                      <Card.Title>Site widget</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco</Card.Text>
                  </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
