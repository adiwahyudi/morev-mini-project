import React from 'react'
import CarouselsItem from './CarouselsItem'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function Carousels(props) {

    const {featured} = props;
    
    return (
        <div className="mb-4 carousel-wrapper">
            <Carousel 
                showArrows={true} 
                interval={5000} 
                autoPlay={true} 
                infiniteLoop={true} 
                swipeable={true} 
                showStatus={false}
                >  
                {featured.map((item) => (
                    <Link to={`detail-movie/${item.id}`}>
                        <CarouselsItem 
                            key={item.id}
                            id={item.id}
                            banner={item.banner}
                            name={item.name}
                            year={item.year}
                        />
                    </Link>
                ))}
            </Carousel>
        </div>  
    )
}
