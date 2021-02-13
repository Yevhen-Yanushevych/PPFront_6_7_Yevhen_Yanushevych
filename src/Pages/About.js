import React, {Component} from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';
import Team from '../assets/team.jpg';
import Flags from '../assets/flags.jpg';
import Map from '../assets/map.jpg';
import Equipment from '../assets/equipment.jpg';


export default class About extends Component{
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
                                <Nav.Link eventKey="second">Visited Countries</Nav.Link>
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
                                    <img src={Team}/>
                                    

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={Flags}/>
                                    

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={Map}/>
                                    

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
