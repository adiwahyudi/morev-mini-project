import React from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselsItem from './CarouselsItem'
import LogoImg from "../../Images/thegodfather-banner.jpg"

export default function Carousels() {
    return (
        <div className="mb-4">
            <Carousel>  
                {[...Array(3)].map(item => {
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
                })}
            </Carousel>
        </div>  
    )
}
