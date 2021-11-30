import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import styles from './ReviewEdit.module.css'

export default function ReviewEdit(props) {

    const {id,onClickUpdate,handleClose} = props;

    const [rating,setRating] = useState(null)
    const [review,setReview] = useState({
        rating,
        review:""
    })


    const onChange = (e) => {
        if (e.target) {
            setReview({
                id,
                ...review, 
                [e.target.name]:e.target.value
            })
        }
    }

    const handleEdit = (e) => {
        console.log("reviewHandleEdit",review);
        onClickUpdate({
            id,
            ...review
        })
    }

    console.log("review",review);

    return (
        <div>
            <div className={styles['popup-box']}>
                <div className={styles.box}>
                    <span className={styles['close-icon']} onClick={handleClose}>x</span>
                    <h4 className="" style={{ color: "white" }}>Edit Review</h4>
                    <div className="ini-star">
                        <div style={{marginTop:10}}>
                            {[...Array(5)].map((star,idx) => {
                                const ratingValue = idx + 1
                                return (
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="rating" 
                                            value={ratingValue} 
                                            onChange={onChange} 
                                            onClick={() => setRating(ratingValue) }
                                        />
                                        <FontAwesomeIcon 
                                            icon={faStar} 
                                            className={styles.star} 
                                            size="2x" 
                                            color={ratingValue <= rating ? "yellow" : "grey"} 
                                        />
                                    </label>
                                )
                            })}
                        </div>
                     </div>
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
