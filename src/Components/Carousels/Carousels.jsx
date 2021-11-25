import React from 'react'
import { Carousel } from "react-bootstrap";
import LogoImg from "../../Images/thegodfather-thumb.jpg"

export default function Carousels() {
    return (
        <div>
            <Carousel className="mt-3 mb-5">
                <Carousel.Item>
                    <img
                    className="d-block rounded m-auto"
                    width='1050'
                    height='550'
                    src={LogoImg}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block rounded m-auto"
                    width='1050'
                    height='550'
                    src={LogoImg}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block rounded m-auto"
                    width='1050'
                    height='550'
                    src={LogoImg}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
