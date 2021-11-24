import React from 'react'
import {Row,Col} from 'react-bootstrap'
import PosterImg from "../../Images/thegodfather-poster.jpg"
import styles from './InfoDetailMovie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

export default function InfoDetailMovie() {
    return (
        <div>
            <div className="pt-3">
                <Row>
                <Col xl={4}>
                <img
                    className="d-block rounded m-auto"
                    width='375'
                    height='550'
                    src={PosterImg}
                    alt="First slide"
                    />
                </Col>
                <FontAwesomeIcon icon={['fab', 'apple']} color='white'></FontAwesomeIcon>
                <Col xl={7}>
                    <ul className={styles['list-info']}>
                        <li className={styles['list-info-title']}>The Godfather</li>
                        <li className={styles['list-info-genre']}>Crime / Drama / 1972 </li>
                        <li className={styles['list-info-star']}>
                            <FontAwesomeIcon icon={faStar} color='yellow'/>
                            <span style={{fontWeight:600}}> 9.2</span> / 10
                        </li>
                        <li className={styles['list-info-likes']}> 
                            <FontAwesomeIcon icon={faThumbsUp} color='#15aabf'/>
                            <span style={{fontWeight:600}}> 1.972</span> Likes
                        </li>
                        <li className={styles['list-info-synopsis']}>Synopsis</li>
                        <li className={styles['list-info-isi-synopsis']}>The Godfather "Don" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.—srijanarora-152-448595 </li>
                    </ul>
                </Col>
            </Row>
             </div>
        </div>
    )
}
