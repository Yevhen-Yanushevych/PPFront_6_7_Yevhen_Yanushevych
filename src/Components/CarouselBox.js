import React, {Component} from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Iceberg from '../assets/Iceberg.jpg';
import Forest from '../assets/Forest.jpg';
import Lake from '../assets/Lake.jpg';


export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Forest}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Taiwan</h3>
                        <p>is a U.S. state on the northwest extremity of the country's West Coast, just across the Bering Strait.is a country in East Asia. Neighbouring countries include the People's Republic of China (PRC) to the northwest, Japan to the northeast, and the Philippines to the south.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Iceberg}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Alaska</h3>
                        <p>is a U.S. state on the northwest extremity of the country's West Coast, just across the Bering Strait.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Lake}
                    alt="Swim"
                    
                    />
                    <Carousel.Caption>
                        <h3>Eldorado National Forest</h3>
                        <p>headquarters are located in Placerville, California. There are local ranger district offices in Camino, Georgetown, Pioneer, and Pollock Pines.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
     
    }
}