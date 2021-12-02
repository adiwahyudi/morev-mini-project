import React from 'react'
import {Row,Col} from 'react-bootstrap'
import styles from './UserReviewItem.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


export default function UserReviewItem(props) {
    const {rating,review,firstName,lastName} = props;
    return (
        <div>
            <div className={styles['outline-part']}>
                <Row className={styles['row-nama-bintang']}>
                    <Col xs={3} className={styles['col-nama']}>
                        {firstName} {lastName}
                    </Col>
                    <Col className={styles['col-star']}>
                        <FontAwesomeIcon icon={faStar} color='yellow'/>
                        <span style={{fontWeight:600}}> {rating}</span> / 5
                    </Col>
                </Row>
                <Row className={styles['row-isi']}>
                   <Col className={styles['col-isi']}>
                    {review}
                   </Col>
                </Row>
            </div>
        </div>
    )
}
