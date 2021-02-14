import React, {Component} from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';
import Team from '../assets/team.jpg';
import Flags from '../assets/flags.jpg';
import Map from '../assets/map.jpg';
import Equipment from '../assets/equipment.jpg';


export default class About extends Component{

    constructor(props){
        super(props)
       
        this.OnMouseUp = this.OnMouseUp.bind(this)
        this.OnMouseDown = this.OnMouseDown.bind(this)
        this.OnMouseOver = this.OnMouseOver.bind(this)
        
        this.state = {counter:0}
        
        
    }
    
    OnMouseUp(){
      this.setState({counter: ++this.state.counter})
    }

    OnMouseDown(){
        this.setState({counter: ++this.state.counter})
      }

      OnMouseOver(){
        this.setState({counter: ++this.state.counter})
      }
    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2 ">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Our Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Visited Countries</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Futures Tours</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Equipment</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={Team} onMouseDown={this.OnMouseDown}/>
                                    <p>(MouseDown:{this.state.counter})</p>
                                    

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={Flags} onMouseUp={this.OnMouseUp}/>
                                    <p>(MouseUp:{this.state.counter})</p>
                                    

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={Map} onMouseOver={this.OnMouseOver}/>
                                    <p>(MouseOver:{this.state.counter})</p>
                                    

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={Equipment}/>
                                    

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        )
     
    }
}
