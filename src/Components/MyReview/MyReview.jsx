import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import styles from './MyReview.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import ReviewEdit from '../ReviewEdit/ReviewEdit'

export default function MyReview(props) {

    const {rev,onDelete,onUpdate} = props;

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
    const onClickDelete = () => {
        onDelete(rev?.id)
    }

    // console.log("ini rev",rev);

    return (
        <div>
            {!isOpen ? (
                <div className={styles['outline-part']}>
                    <Row className={styles['row-nama-bintang']}>
                        <Col xs={3} className={styles['col-nama']}>
                            {rev?.user?.first_name} {rev?.user?.last_name}
                        </Col>
                        <Col className={styles['col-star']}>
                            <FontAwesomeIcon icon={faStar} color='yellow'/>
                            <span style={{fontWeight:600}}> {rev?.rating}</span> / 5
                        </Col>
                        <Col xs='auto' >
                            <button className={styles['button-edit']} onClick={togglePopup}>EDIT</button>
                        </Col>
                        <Col xs='auto'>
                            <button className={styles['button-del']} onClick={onClickDelete} >DELETE</button>
                        </Col>
                    </Row>
                    <Row className={styles['row-isi']}>
                    <Col className={styles['col-isi']}>
                        {rev?.review}
                    </Col>
                    </Row>
                </div>

            ) : (
                <ReviewEdit id={rev.id} handleClose={togglePopup} onClickUpdate={onUpdate}/>
            )}
        </div>
    )
}
