import React, {useState} from 'react'
import { useParams } from 'react-router'
import { Form,Button } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'
import styles from './AddReview.module.css'

export default function AddReview(props) {
    
    const { id } = useParams();
    const id_user = localStorage.getItem("user_id")
    
    const [review,setReview] = useState({
        id_movies:id,
        id_user,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit",review)
        props.onSubmit({
            ...review
        })
    }

    const initRating = (rate) => {
        review.rating = rate
    }

    return (
        <>
            <Rating 
                emptySymbol={<FontAwesomeIcon icon={faStar} color="grey" size="2x"/>}
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
