import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as starEmpty} from '@fortawesome/free-regular-svg-icons'
import Rating from 'react-rating'
import styles from './ReviewEdit.module.css'

export default function ReviewEdit(props) {

    const {id,onClickUpdate,handleClose} = props;

    // const [rating,setRating] = useState(null)
    const [review,setReview] = useState({
        id,
        rating:0,
        review:""
    })


    const onChange = (e) => {
        if (e.target) {
            setReview({
                ...review, 
                [e.target.name]:e.target.value
            })
        }
    }

    const handleEdit = (e) => {
        console.log("reviewHandleEdit",review);
        onClickUpdate({
            ...review
        })
    }

    const initRating = (rate) => {
        review.rating = rate
    }

    console.log("review",review);

    return (
        <div>
            <div className={styles['popup-box']}>
                <div className={styles.box}>
                    <span className={styles['close-icon']} onClick={handleClose}>x</span>
                    <h4 className="" style={{ color: "white" }}>Edit Review</h4>
                    <Rating 
                        emptySymbol={<FontAwesomeIcon icon={starEmpty} size="2x"/>}
                        fullSymbol={<FontAwesomeIcon icon={faStar} color="yellow" size="2x"/>}
                        onChange={(rate) => initRating(rate)}
                        initialRating={review.rating}
                    />
                    <Form>
                        <Form.Group className="py-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control 
                                name="review"
                                as="textarea" 
                                placeholder="add your review here..." 
                                rows={13}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Form>
                    <div className="pb-3">
                        <Button 
                            className={`${styles['btn-suc']} d-flex justify-content-center primary px-3`} 
                            variant="success" 
                            type="submit" 
                            // onClick={handleEdit}
                            onClick={() => {
                                handleEdit();
                                handleClose();
                            }}
                            > Update Review </Button>   
                    </div>
                </div>
            </div>
        </div>
    )
}
