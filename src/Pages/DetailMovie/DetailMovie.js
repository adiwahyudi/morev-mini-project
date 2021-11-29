import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect,useState } from 'react'
import AddReview from "../../Components/AddReview/AddReview";
import FooterBasic from "../../Components/Footer/FooterBasic";
import InfoDetailMovie from "../../Components/InfoDetailMovie/InfoDetailMovie";
import MyReview from "../../Components/MyReview/MyReview";
import NavigationBar from "../../Components/Navbar/NavigationBar";
import UserReview from "../../Components/UserReview/UserReview";
import useGet3CommentByMovieId from '../../Hooks/useGet3CommentByMovieId'
import useGetMoviesById from '../../Hooks/useGetMoviesById'
import useGetMyReview from '../../Hooks/useGetMyReview'

function DetailMovie(){

    const { id } = useParams();
    const id_user = 1;
    
    const { dataMoviesById,loadingMoviesById,errorMoviesById} = useGetMoviesById(id)
    const { dataMovieComment,loadingMovieComment,errorMovieComment} = useGet3CommentByMovieId(id)
    const { dataMyReview,loadingMyReview,errorMyReview } = useGetMyReview(id,id_user)

    const [movById,setMovById] = useState()
    const [userReview,setUserReview] = useState([])
    const [myReview,setMyReview] = useState()

    useEffect(() => {
        if (dataMoviesById) {
            setMovById(dataMoviesById.movies[0]);
        }
        if (dataMovieComment) {
            setUserReview(dataMovieComment.review);
        }
        if (dataMyReview) {
            setMyReview(dataMyReview.review);
        }
    }, [dataMoviesById,dataMovieComment,dataMyReview]);


    if (errorMovieComment ){
        console.log(errorMovieComment);
        return <h1>Error</h1>
    }


    if (errorMoviesById ){
        console.log(errorMoviesById);
        return <h1>Error</h1>
    }

    if (errorMyReview ){
        console.log(errorMyReview);
        return <h1>Error</h1>
    }
    
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <InfoDetailMovie detail={movById}/>

                    <h3 className="mt-4 mb-3" style={{color:"white"}}>User Review</h3>
                    {userReview.length > 0 ? (
                        <UserReview urev={userReview}/>
                    ) : (
                        <h6 className="text-center fw-light" style={{color:"white"}}>Sorry no one have been review in this for this movie</h6>
                    )}
                    {}
                    <MyReview rev={myReview}/>
                    <AddReview/>
                </Container>
                <FooterBasic/>
            </div>
        </div>
    )
}
export default DetailMovie;
