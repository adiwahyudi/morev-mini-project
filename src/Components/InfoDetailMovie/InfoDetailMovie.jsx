import React from 'react'
import { useParams } from 'react-router'
import {Row,Col} from 'react-bootstrap'
import styles from './InfoDetailMovie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import useGetMoviesById from '../../Hooks/useGetMoviesById'

import Loading from '../Loading/Loading'

export default function InfoDetailMovie() {

    const { id } = useParams();
    const { dataMoviesById,loadingMoviesById,errorMoviesById} = useGetMoviesById(id)


    if (loadingMoviesById ) {
        return <Loading/>
    }

    if (errorMoviesById ){
        return <h1>Error</h1>
    }
    console.log("dataMoviesById",dataMoviesById);
    return (
        <div>
            <div className="" style={{paddingTop:75}}>
                <Row>
                    <Col xl={4}>
                    <img
                        className="d-block rounded m-auto"
                        width='375'
                        height='550'
                        src={dataMoviesById.movies[0].poster}
                        alt="First slide"
                        />
                    </Col>
                    <Col xl={7}>
                        <ul className={styles['list-info']}>
                            <li className={styles['list-info-title']}>{dataMoviesById.movies[0].name}</li>
                            <li className={styles['list-info-genre']}>{dataMoviesById.movies[0].genre} / {dataMoviesById.movies[0].year}</li>
                            <li className={styles['list-info-star']}>
                                <FontAwesomeIcon icon={faStar} color='yellow'/>
                                <span style={{fontWeight:600}}> {dataMoviesById.movies[0].rating}</span> / 5
                            </li>
                            <li className={styles['list-info-likes']}> 
                                <FontAwesomeIcon icon={faThumbsUp} color='#667FB5'/>
                                <span style={{fontWeight:600}}> {dataMoviesById.movies[0].likes}</span> Likes
                            </li>
                            <li className={styles['list-info-synopsis']}>Synopsis</li>
                            <li className={styles['list-info-isi-synopsis']}>{dataMoviesById.movies[0].synopsis}</li>
                        </ul>
                    </Col>
                </Row>
             </div>
        </div>
    )
}
