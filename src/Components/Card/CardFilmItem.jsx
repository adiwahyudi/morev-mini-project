import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './CardFilm.module.css'

export default function CardFilm(props) {
    const {poster,name,year,id} = props;
    return (
        <>
            <div className={`${styles.pembungkusCard} card-group`}>
                <Card className={`${styles.cardItem} mx-3`} >
                    <Link to={`/detail-movie/${id}`}>
                        <Card.Img className={styles['img-poster']} variant="top" src={poster} />
                    </Link>
                    <Card.Body>
                        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
                        <Card.Text className={styles.cardTahun}>{year}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
