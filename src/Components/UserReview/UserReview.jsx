import React from 'react'
import UserReviewItem from './UserReviewItem'
export default function UserReview(props) {

    const {urev} = props;
    console.log("urev",urev);
    return (    
        <>
            {urev.map((item) => (
                <UserReviewItem 
                    key={item.id}
                    id={item.id}
                    user_id={item.id_user}
                    rating={item.rating}
                    review={item.review}
                    firstName={item.user.first_name}
                    lastName={item.user.last_name}
                />
            ))}
        </>
    )
}
