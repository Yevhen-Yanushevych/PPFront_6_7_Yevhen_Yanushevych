import React, {Component} from 'react';
import { CardDeck, Container, Card, Button} from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Best1 from '../assets/Best1.jpg'
import Best2 from '../assets/Best2.jpg'
import Best3 from '../assets/Best3.jpg'


export default class Home extends Component{
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.ClickSelect = this.ClickSelect.bind(this)
        this.ClickOut = this.ClickOut.bind(this)
        this.state = {counter:0}
        this.state2 = {counter:0}
        this.state3 = {counter:0}
        
        
    }
    clickHandler(){
        this.setState({counter: ++this.state.counter})
        console.log('Clicked the button')
    }

    ClickSelect() {
        this.setState({counter: ++this.state2.counter})
    }

    ClickOut() {
        this.setState({counter: ++this.state3.counter})
    }


    

    render(){
        return(
            <>
            <CarouselBox/>

            <Container>
                <h2 className="text-center m-4">Best Photos</h2>
                <CardDeck className="m-4">
                    <Card border="success">
                        <Card.Img 
                        variant="top"
                        src={Best1}
                        />
                        <Card.Body>
                            <Card.Title>Daily</Card.Title>
                            <Card.Text>Mount Agung in the sunrise, Sidemen, Bali, Indonesia</Card.Text>
                            <Button variant="primary" onClick={this.clickHandler}>Best photos</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Img 
                        variant="top"
                        src={Best2}
                        />
                        <Card.Body>
                            <Card.Title>Mounthly</Card.Title>
                            <Card.Text>El Cap, Yosemite National Park, United States</Card.Text>
                            <Button variant="primary" onMouseMove={this.clickHandler}>Best photos (Moove:{this.state.counter})</Button>
                        </Card.Body>
                    </Card>
                    <Card border="warning">
                        <Card.Img 
                        variant="top"
                        src={Best3}
                        />
                        <Card.Body>
                            <Card.Title onMouseOut={this.ClickOut}>Yearly (MouseOut:{this.state3.counter})</Card.Title>
                            <Card.Text onCopy={this.ClickSelect}>Autumn Forest, Bad Pyrmont, Deutschland (Select:{this.state2.counter})</Card.Text>
                            <Button variant="primary" onClick={this.clickHandler}>Best photos (Click:{this.state.counter})</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </Container>
            </>
        );
     
    }
}
