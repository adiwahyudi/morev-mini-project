import React from 'react'
import { Form } from 'react-bootstrap'
import StarRating from '../StarRating/StarRating'
import styles from './AddReview.module.css'

export default function AddReview() {
    return (
        <div>
            <h3 className={styles['judul-atas']}>Add Review</h3>
            <StarRating/>
            <Form style={{}}>
                <Form.Group className="py-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="add your review here..." rows={13}/>
                </Form.Group>
            </Form>
            <div className="py-3 pb-5">
                <button className={styles['button-submit']}> 
                    SUBMIT REVIEW 
                </button>
            </div>
        </div>
    )
}
