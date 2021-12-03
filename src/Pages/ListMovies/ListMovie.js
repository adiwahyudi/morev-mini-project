import {useState,useEffect} from 'react'
import { Col, Container, Row  } from "react-bootstrap"
import FooterBasic from "../../Components/Footer/FooterBasic"
import NavigationBar from "../../Components/Navbar/NavigationBar"
import SearchBar from "../../Components/SearchBar/SearchBar"
import useGetAllMovies from '../../Hooks/useGetAllMovies'
// import useGetByAsc from '../../Hooks/useGetByAsc'
// import useGetByDesc from '../../Hooks/useGetByDesc'
// import useGetGetByRating from '../../Hooks/useGetByRating'
// import useGetByLikes from '../../Hooks/useGetByLikes'
import CardFilm from '../../Components/Card/CardFilm'
import Loading from '../../Components/Loading/Loading'
import "./ListMovie.css"

function ListMovies() {

    const {dataAllMovies,loadingAllMovies,errorAllMovies} = useGetAllMovies()
    // const {dataByAsc,loadingByAsc,errorByAsc} = useGetByAsc()
    // const {dataByDesc,loadingByDesc,errorByDesc} = useGetByDesc() 
    // const {dataByLikes,loadingByLikes,errorByLikes} = useGetByLikes()
    // const {dataByRating,loadingByRating,errorByRating} = useGetGetByRating()


    const [movie,setMovie] = useState([]);
    const [input,setInput] = useState('')
    const [dropDown,setDropDown] = useState('')
    
    useEffect(() => {
        if (dataAllMovies) {
            setMovie(dataAllMovies.movies);
        }
    }, [dataAllMovies]);


    if (errorAllMovies) {
        return <h1>Error</h1>
    }

    
    const onChangeInput = (e) => {
        if (e.target) {
            setInput(e.target.value)
        }
    }
    
    const onChangeDropDown = (e) => {
        if(e.target) {
            setDropDown(e.target.value)
        }
    }
    // useEffect(() => {
    //     if (dataByAsc)  {
    //         setMovie(dataByAsc.movies);
    //     }
    //     if (dataByDesc) {
    //         setMovie(dataByDesc.movies);
    //     }
    //     if (dataByLikes){
    //         setMovie(dataByLikes.movies)
    //     }
    //     if (dataByRating) {
    //         setMovie(dataByRating.movie)
    //     }
    // },[dataByAsc,dataByDesc,dataByLikes,dataByRating])


    console.log(movie);

    const filteredSearch = movie.filter(data => {
        return data?.name.toLowerCase().includes(input.toLowerCase());
    });

    console.log(dropDown);

    return(
        <>
            <NavigationBar/>
            <div className="isi pt-2" >
                <Container>
                    <Row className="mt-2 d-flex">
                        <Col xl={5}>
                            <h3 className="mt-5" style={{color:"white"}}>List Movies</h3>
                        </Col>
                        <Col xl={7} className="justify-content-end">
                            <div className="ms-auto text-end mt-5">
                                <select className="dropdown-sort" onChange={onChangeDropDown} >
                                    <option value="asc"> Ascending Year</option>
                                    <option value="desc"> Descending Year</option>
                                    <option value="rating"> Rating </option>
                                    <option value="like"> Likes </option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <SearchBar onChangeInput={onChangeInput}/>
                    </Row>
                    {loadingAllMovies ? (
                        <Loading/>
                    ) : (
                        <CardFilm films={filteredSearch}/>    
                    )}
                </Container>
                <FooterBasic/>
            </div>
        </>
    )
}

export default ListMovies
