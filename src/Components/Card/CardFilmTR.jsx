import React from 'react'
import CardFilm from './CardFilm'

export default function CardFilmTR() {
    return (
        <div className="pb-3 list-film">
            {[...Array(5)].map(card => {
                return (
                    <CardFilm/>
                )
            })}
        </div>
    )
}
