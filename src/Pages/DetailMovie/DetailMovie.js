import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import AddReview from "../../Components/AddReview/AddReview";
import FooterBasic from "../../Components/Footer/FooterBasic";
import InfoDetailMovie from "../../Components/InfoDetailMovie/InfoDetailMovie";
import MyReview from "../../Components/MyReview/MyReview";
import NavigationBar from "../../Components/Navbar/NavigationBar";
import UserReview from "../../Components/UserReview/UserReview";
import useGet3CommentByMovieId from '../../Hooks/useGet3CommentByMovieId'
import useGetMoviesById from '../../Hooks/useGetMoviesById'
import useGetMyReview from '../../Hooks/useGetMyReview'
import useInsertReview from "../../Hooks/useInsertReview";
import useUpdateReview from "../../Hooks/useUpdateReview";
import useDeleteReview from "../../Hooks/useDeleteReview";
import Loading from "../../Components/Loading/Loading";

function DetailMovie() {

    const { id } = useParams();

    let id_user = 0;

    if (localStorage.getItem("user_id") !== null ){
        id_user = localStorage.getItem("user_id")
    }

    const { dataMoviesById, loadingMoviesById, errorMoviesById } = useGetMoviesById(id)
    const { dataMovieComment, loadingMovieComment, errorMovieComment } = useGet3CommentByMovieId(id)
    const { dataMyReview, loadingMyReview, errorMyReview } = useGetMyReview(id, id_user)
    
    const {insertReview,loadingInsertReview} = useInsertReview();
    const {deleteReview,loadingDeleteReview} = useDeleteReview();
    const {updateReview,loadingUpdateReview} = useUpdateReview();

    const [userReview, setUserReview] = useState([])
    const [myReview, setMyReview] = useState()

    const onSubmitInsertReview = (val) => {
        insertReview({
            variables: {...val}
        })
    }

    const onUpdateReview = (id,val) => {
        updateReview({
            variables:{
                id,
                ...val
            }
        })
    }

    const onDeleteReview = (id) => {
        deleteReview({
            variables: {id}
        })
    }
    useEffect(() => {
        if (dataMovieComment) {
            setUserReview(dataMovieComment.review);
        }
        if (dataMyReview) {
            setMyReview(dataMyReview.review[0]);
        }
    }, [dataMoviesById, dataMovieComment, dataMyReview]);


    if (errorMovieComment) {
        console.log(errorMovieComment);
        return <h1>Error</h1>
    }

    if (errorMoviesById) {
        console.log(errorMoviesById);
        return <h1>Error</h1>
    }

    if (errorMyReview) {
        console.log(errorMyReview);
        return <h1>Error</h1>
    }

    return (
        <div>
            <NavigationBar />
            <div style={{ backgroundColor: '#1A1A1A' }}>
                <Container>

                    {loadingMoviesById ? (
                        <Loading />
                    ) : (
                        <InfoDetailMovie detail={dataMoviesById} />

                    )}

                    <h3 className="mt-4 mb-3" style={{ color: "white" }}>User Review</h3>
                    {loadingMovieComment ? (
                        <Loading />
                    ) : (
                        [
                            (userReview.length > 0 ? (
                                <UserReview urev={userReview} />

                            ) : (
                                <h6 className="text-center fw-light" style={{ color: "white" }}>Sorry, no review for this movie</h6>
                            ))
                        ]
                    )}

                    <h3 className="mt-4 mb-3" style={{ color: "white" }}>My Review</h3>
                    {loadingMyReview ? (
                        <Loading />
                    ) : (
                        [
                            (myReview !== undefined ? (
                                <MyReview 
                                    rev={myReview} 
                                    loadingDel={loadingDeleteReview}
                                    onDelete={onDeleteReview}
                                    onUpdate={onUpdateReview}
                                />
                            ) : (
                                <h6 className="text-center fw-light" style={{ color: "white" }}>You have no review, create a new one!</h6>
                            ))
                        ]
                    )}
                    <h3 className="mt-4 mb-3" style={{ color: "white" }}>Add Review</h3>
                    {myReview === undefined ? (
                        [
                            (id_user === 0 ? (
                                <h6 className="text-center fw-light pt-3 mb-5" style={{ color: "white" }}>Sorry, you have to be login!</h6>
                            ) : (
                                <AddReview 
                                    onSubmit={onSubmitInsertReview} 
                                    loadingInsert={loadingInsertReview}
                                />
                            ))
                        ]
                        ) : (
                            <h6 className="text-center fw-light pt-3 mb-5" style={{ color: "white" }}>You've created a review, check on My Review!</h6>
                        )}
                </Container>
                <FooterBasic />
            </div>
        </div>
    )
}
export default DetailMovie;
