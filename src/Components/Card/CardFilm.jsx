import React from 'react'
import CardFilmItem from './CardFilmItem'
import {Row,Col} from 'react-bootstrap'
export default function CardFilmList(props) {
    const {films} = props;
    console.log(films);
    return (
        <Row>
            <Col>
                <div className="list-film">
                    {films.map((item) => (
                        <CardFilmItem 
                            key={item.id}
                            id={item.id}
                            poster={item.poster}
                            name={item.name}
                            year={item.year}
                        />
                    ))}
                </div>
            </Col>
        </Row>
    )
}
