import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import UserReviewItem from './UserReviewItem'
import useGet3CommentByMovieId from '../../Hooks/useGet3CommentByMovieId'
import Loading from '../Loading/Loading';
import styles from './UserReviewItem.module.css'

export default function UserReview() {

    const { id } = useParams();
    const { dataMovieComment,loadingMovieComment,errorMovieComment} = useGet3CommentByMovieId(id)
    const [userReview,setUserReview] = useState([])

    useEffect(() => {
        if (dataMovieComment) {
            setUserReview(dataMovieComment.review);
        }
    }, [dataMovieComment]);


    if (loadingMovieComment ) {
        return <Loading/>
    }

    if (errorMovieComment ){
        return <h1>Error</h1>
    }

    return (    
        <>
            <h3 className={styles['judul-atas']}>User Review</h3>
            {userReview.length > 0 ? (
                userReview.map((item) => (
                    <UserReviewItem 
                        key={item.id}
                        id={item.id}
                        user_id={item.id_user}
                        rating={item.rating}
                        review={item.review}
                    />
                ))
            ) : (
                <h6 className="text-center fw-light" style={{color:"white"}}>Sorry no one have been review in this for this movie</h6>
            )
        }
        </>
    )
}
