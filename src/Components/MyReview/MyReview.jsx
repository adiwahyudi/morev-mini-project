import React from 'react'
import { useParams } from 'react-router'
import {Row,Col} from 'react-bootstrap'
import styles from './MyReview.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import useGetMyReview from '../../Hooks/useGetMyReview'
import Loading from '../Loading/Loading';

export default function MyReview() {

    const { id } = useParams();
    const id_user = 1;
    const { dataMyReview,loadingMyReview,errorMyReview } = useGetMyReview(id,id_user)

    if (loadingMyReview){
        <Loading/>
    }

    if (errorMyReview) {
        <h1>Error</h1>
    }
    
    console.log("dataMyReview",dataMyReview);

    return (
        <div>
            <h3 className={styles['judul-atas']}>My Review</h3>
            <div className={styles['outline-part']}>
                <Row className={styles['row-nama-bintang']}>
                    <Col xs={3} className={styles['col-nama']}>
                        {dataMyReview?.review[0].user.first_name} {dataMyReview?.review[0].user.last_name}
                    </Col>
                    <Col className={styles['col-star']}>
                        <FontAwesomeIcon icon={faStar} color='yellow'/>
                        <span style={{fontWeight:600}}> {dataMyReview?.review[0].rating}</span> / 10
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
                       {dataMyReview?.review[0].review}
                   </Col>
                </Row>
            </div>
        </div>
    )
}
