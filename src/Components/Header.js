import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


import logo from "./logo194.png";

export default class Header extends Component {

  constructor(props){
    super(props)
   
    this.OnCut = this.OnCut.bind(this)
    
    this.state = {counter:0}
    
    
}

OnCut(){
  this.setState({counter: ++this.state.counter})
}


  render() {
    return (
      <>
        <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />Traveler
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsible-navbar-nav" />
            <Navbar.Collapse id="responsible-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onCut={this.OnCut}
                />
                <Button variant="outline-info" >Search (Cut:{this.state.counter})</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/blog" component={Blog}/>
            </Switch>
        </Router>
      </>
    );
  }
}
