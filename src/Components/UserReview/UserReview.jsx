import React from 'react'
import {Row,Col} from 'react-bootstrap'
import styles from './UserReview.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function UserReview() {
    return (
        <div>
            <h3 className={styles['judul-atas']}>User Review</h3>
            <div className={styles['outline-part']}>
                <Row className={styles['row-nama-bintang']}>
                    <Col xs={3} className={styles['col-nama']}>
                        Adi Wahyudi
                    </Col>
                    <Col className={styles['col-star']}>
                        <FontAwesomeIcon icon={faStar} color='yellow'/>
                        <span style={{fontWeight:600}}> 9.2</span> / 10
                    </Col>
                </Row>
                <Row className={styles['row-isi']}>
                   <Col className={styles['col-isi']}>
                    Up until today, I haven't bothered to review "The Godfather". After all, everyone pretty much knows it's one of the greatest films ever made.  It's #2 on IMDb's Top 100. It won the Best Picture Oscar. And, there are nearly 1600 reviews on IMDb. So what's one more review?! Well, after completing 14,000 reviews (because I am nuts), I guess it's time I got around to reviewing a film I should have reviewed a long time ago. So, here goes....the film is perfect and only a dope wouldn't watch it. Unfortunately, IMDb requires me to say more to meet it's 10 line minimum for reviews. So, I'll point out that you do NOT need to like gangster films to enjoy this film. Yes, it's violent and nasty in spots--but it's also brilliantly written and produced from start to finish and deserves the accolades it's received.
                    My advice is that instead of just watching "The Godfather" and "The Godfather: Part II", see the combined version they created for television--with additional scenes that made it a very rich experience.
                   </Col>
                </Row>
            </div>
            <div className={styles['outline-part']}>
                <Row className={styles['row-nama-bintang']}>
                    <Col xs={3} className={styles['col-nama']}>
                        Adi Wahyudi
                    </Col>
                    <Col className={styles['col-star']}>
                        <FontAwesomeIcon icon={faStar} color='yellow'/>
                        <span style={{fontWeight:600}}> 9.2</span> / 10
                    </Col>
                </Row>
                <Row className={styles['row-isi']}>
                   <Col className={styles['col-isi']}>
                    Up until today, I haven't bothered to review "The Godfather". After all, everyone pretty much knows it's one of the greatest films ever made.  It's #2 on IMDb's Top 100. It won the Best Picture Oscar. And, there are nearly 1600 reviews on IMDb. So what's one more review?! Well, after completing 14,000 reviews (because I am nuts), I guess it's time I got around to reviewing a film I should have reviewed a long time ago. So, here goes....the film is perfect and only a dope wouldn't watch it. Unfortunately, IMDb requires me to say more to meet it's 10 line minimum for reviews. So, I'll point out that you do NOT need to like gangster films to enjoy this film. Yes, it's violent and nasty in spots--but it's also brilliantly written and produced from start to finish and deserves the accolades it's received.
                    My advice is that instead of just watching "The Godfather" and "The Godfather: Part II", see the combined version they created for television--with additional scenes that made it a very rich experience.
                   </Col>
                </Row>
            </div>
        </div>
    )
}
