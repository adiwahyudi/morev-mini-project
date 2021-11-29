import React from 'react'
import {Row,Col} from 'react-bootstrap'
import styles from './InfoDetailMovie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

export default function InfoDetailMovie(props) {
    
    const {detail} = props;

    console.log("detail",detail);

    return (
        <div>
            <div className="" style={{paddingTop:75}}>
                <Row>
                    <Col xl={4}>
                    <img
                        className="d-block rounded m-auto"
                        width='375'
                        height='550'
                        src={detail?.poster}
                        alt="First slide"
                        />
                    </Col>
                    <Col xl={7}>
                        <ul className={styles['list-info']}>
                            <li className={styles['list-info-title']}>{detail?.name}</li>
                            <li className={styles['list-info-genre']}>{detail?.genre} / {detail?.year}</li>
                            <li className={styles['list-info-star']}>
                                <FontAwesomeIcon icon={faStar} color='yellow'/>
                                <span style={{fontWeight:600}}> {detail?.rating}</span> / 5
                            </li>
                            <li className={styles['list-info-likes']}> 
                                <FontAwesomeIcon icon={faThumbsUp} color='#667FB5'/>
                                <span style={{fontWeight:600}}> {detail?.likes}</span> Likes
                            </li>
                            <li className={styles['list-info-synopsis']}>Synopsis</li>
                            <li className={styles['list-info-isi-synopsis']}>{detail?.synopsis}</li>
                        </ul>
                    </Col>
                </Row>
             </div>
        </div>
    )
}
