import React from 'react'
import { Carousel } from "react-bootstrap";
import LogoImg from "../../Images/thegodfather-banner.jpg"

export default function CarouselsItem() {
    return (
        <Carousel.Item>
            <img
            className="d-block rounded m-auto"
            width='1050'
            height='550'
            src={LogoImg}
            alt="abd"
            />
            <Carousel.Caption>
                <h3>The Godfather</h3>
                <p>1972</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
