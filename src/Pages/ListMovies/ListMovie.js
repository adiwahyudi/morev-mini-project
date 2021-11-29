import {useState,useEffect} from 'react'
import { Col, Container, Row  } from "react-bootstrap"
import FooterBasic from "../../Components/Footer/FooterBasic"
import Judul from "../../Components/Judul/Judul"
import NavigationBar from "../../Components/Navbar/NavigationBar"
import SearchBar from "../../Components/SearchBar/SearchBar"
import useGetAllMovies from '../../Hooks/useGetAllMovies'
import CardFilmList from '../../Components/Card/CardFilmList'
import "./ListMovie.css"
import Loading from '../../Components/Loading/Loading'

function ListMovies() {
    const {
        dataAllMovies,
        loadingAllMovies,
        errorAllMovies
    } = useGetAllMovies()

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        if (dataAllMovies) {
            setMovie(dataAllMovies.movies);
        }
    }, [dataAllMovies]);

    if (errorAllMovies) {
        return <h1>Error</h1>
    }
    return(
        <>
            <NavigationBar/>
            <div className="isi pt-1" >
                <Container>
                    <Row className="mt-2 d-flex">
                        <Col sm={10}>
                            <Judul judul="List Movies"/>
                        </Col>
                        <Col sm={2}>
                            <div style={{paddingTop:70}}>
                                <select className="dropdown-sort">
                                    <option value=""> Ascending </option>
                                    <option value=""> Descending </option>
                                    <option value=""> Rating </option>
                                    <option value=""> Likes </option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <SearchBar/>
                    {loadingAllMovies ? (
                        <Loading/>
                    ) : (
                        <CardFilmList films={movie}/>    
                    )}
                </Container>
                <FooterBasic/>
            </div>
        </>
    )
}

export default ListMovies
