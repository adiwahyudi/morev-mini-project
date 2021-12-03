import {useState,useEffect} from 'react'
import { Col, Container, Row  } from "react-bootstrap"
import FooterBasic from "../../Components/Footer/FooterBasic"
import NavigationBar from "../../Components/Navbar/NavigationBar"
import SearchBar from "../../Components/SearchBar/SearchBar"
import useGetAllMovies from '../../Hooks/useGetAllMovies'
import CardFilm from '../../Components/Card/CardFilm'
import Loading from '../../Components/Loading/Loading'
import "./ListMovie.css"

function ListMovies() {
    
    const {
        dataAllMovies,
        loadingAllMovies,
        errorAllMovies
    } = useGetAllMovies()

    const [movie,setMovie] = useState([]);
    const [input,setInput] = useState('')
    
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

    const filteredSearch = movie.filter(data => {
        return data?.name.toLowerCase().includes(input.toLowerCase());
    });

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
                                <select className="dropdown-sort">
                                    <option value="" > Ascending </option>
                                    <option value=""> Descending </option>
                                    <option value=""> Rating </option>
                                    <option value=""> Likes </option>
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
