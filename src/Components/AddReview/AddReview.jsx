import React, {useState} from 'react'
import { Form,Button } from 'react-bootstrap'
// import useInsertReview from '../../Hooks/useInsertReview'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import styles from './AddReview.module.css'
import { useParams } from 'react-router'

export default function AddReview(props) {
    const { id } = useParams();
    const id_user = localStorage.getItem("user_id")
    
    const [rating,setRating] = useState(null)
    const [review,setReview] = useState({
        id_movies:id,
        id_user,
        rating,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            ...review
        })
    }
    console.log(review)
    return (
        <>
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
            <div className="py-3 pb-5">
                <Button 
                    className={`${styles['btn-suc']} d-flex justify-content-center primary px-3`} 
                    variant="success" 
                    type="submit" 
                    onClick={handleSubmit}
                    > Submit Review </Button>   
            </div>
        </>
    )
}
