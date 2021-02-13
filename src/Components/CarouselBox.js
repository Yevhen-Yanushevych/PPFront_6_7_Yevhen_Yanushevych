import React, {Component} from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import swim1Img from '../assets/swim1.jpg';
import swim2Img from '../assets/swim2.jpg';

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={swim1Img}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Swim image</h3>
                        <p>The Fifth Stroke: Dolphin Kick Drills That Can Improve Performance</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={swim2Img}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Swim image</h3>
                        <p>The Fifth Stroke: Dolphin Kick Drills That Can Improve Performance</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={swim1Img}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Swim image</h3>
                        <p>The Fifth Stroke: Dolphin Kick Drills That Can Improve Performance</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
     
    }
}