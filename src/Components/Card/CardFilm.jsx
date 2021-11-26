import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import PosterImg from "../../Images/thegodfather-poster.jpg"
import styles from './CardFilm.module.css'

export default function CardFilm() {
    return (
        <div>
            <div className={`${styles.pembungkusCard} d-flex`}>
                <Card className={`${styles.cardItem} mx-3`} >
                    <Link to="/detail-movie">
                        <Card.Img variant="top" src="https://cdn.wallpapersafari.com/71/79/ABPkK1.jpg" />
                    </Link>
                    <Card.Body>
                        <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                        <Card.Text className={styles.cardTahun}>1972</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
