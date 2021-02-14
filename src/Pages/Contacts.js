import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {

  constructor(props){
    super(props)
   
    this.OnKeyPress = this.OnKeyPress.bind(this)
    
    this.state = {counter:0}
    
    
}

OnKeyPress(){
  this.setState({counter: ++this.state.counter})
}



  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center">Contact us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email adress (KeyPressed:{this.state.counter})</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onKeyPress={this.OnKeyPress} />
            <Form.Text>We'll never share your email with anyone else</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Cheack me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
