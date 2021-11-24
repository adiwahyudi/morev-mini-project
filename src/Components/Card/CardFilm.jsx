import React from 'react'
import {Card} from 'react-bootstrap'
import PosterImg from "../../Images/thegodfather-poster.jpg"
import styles from './CardFilm.module.css'

export default function CardFilm() {
    return (
        <div>
            <h3 className={`${styles.judulAtas} py-3 px-3`} >Top Rated Movies</h3>
            <div className={`${styles.pembungkusCard} d-flex`}>
                <Card className={`${styles.cardItem} mx-3`} >
                <Card.Img variant="top" src={PosterImg} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                    <Card.Text className={styles.cardTahun}>1972</Card.Text>
                </Card.Body>
                </Card>
                <Card className={`${styles.cardItem} mx-3`}>
                <Card.Img variant="top" src={PosterImg} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                    <Card.Text className={styles.cardTahun}>1972</Card.Text>
                </Card.Body>
                </Card>
                <Card className={`${styles.cardItem} mx-3`}>
                <Card.Img variant="top" src={PosterImg} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                    <Card.Text className={styles.cardTahun}>1972</Card.Text>
                </Card.Body>
                </Card>
                <Card className={`${styles.cardItem} mx-3`}>
                <Card.Img variant="top" src={PosterImg} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                    <Card.Text className={styles.cardTahun}>1972</Card.Text>
                </Card.Body>
                </Card>
                <Card className={`${styles.cardItem} mx-3`}>
                <Card.Img variant="top" src={PosterImg} />
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>The Godfather</Card.Title>
                    <Card.Text className={styles.cardTahun}>1972</Card.Text>
                </Card.Body>
                </Card>
                
                
            </div>
        </div>
    )
}
