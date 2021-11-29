import React from 'react'
import CardFilm from './CardFilm'
export default function CardFilmList(props) {

    const {films} = props;
    console.log(films);
    return (
        <div className="list-film">
            {films.map((item) => (
                <CardFilm 
                    key={item.id}
                    id={item.id}
                    poster={item.poster}
                    name={item.name}
                    year={item.year}
                />
            ))}
        </div>
    )
}
