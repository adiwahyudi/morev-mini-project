import React from 'react'
import {Row,Col} from 'react-bootstrap'
import styles from './MyReview.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function MyReview(props) {
    const {rev} = props;
    return (
        <div>
            <h3 className={styles['judul-atas']}>My Review</h3>
            <div className={styles['outline-part']}>
                <Row className={styles['row-nama-bintang']}>
                    <Col xs={3} className={styles['col-nama']}>
                        {rev?.user?.first_name} {rev?.user?.last_name}
                    </Col>
                    <Col className={styles['col-star']}>
                        <FontAwesomeIcon icon={faStar} color='yellow'/>
                        <span style={{fontWeight:600}}> {rev?.rating}</span> / 10
                    </Col>
                    <Col xs='auto' >
                        <button className={styles['button-edit']}>EDIT</button>
                    </Col>
                    <Col xs='auto'>
                        <button className={styles['button-del']}>DELETE</button>
                    </Col>
                </Row>
                <Row className={styles['row-isi']}>
                   <Col className={styles['col-isi']}>
                       {rev?.review}
                   </Col>
                </Row>
            </div>
        </div>
    )
}
