import React , {useState} from 'react'
import styles from './StarRating.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function StarRating() {
    const [rating,setRating] = useState(null)

    return (
        <div style={{marginTop:10}}>
            {[...Array(5)].map((star,idx) => {
                const ratingValue = idx + 1
                return (
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue) }/>
                    <FontAwesomeIcon icon={faStar} className={styles.star} size="2x" color={ratingValue <= rating ? "yellow" : "grey"} />
                </label>
                )
            })}
        </div>
    )
}
