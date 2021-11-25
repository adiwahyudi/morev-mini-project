import { Col, Container, Row  } from "react-bootstrap"
import CardFilm from "../../Components/Card/CardFilm"
import FooterBasic from "../../Components/Footer/FooterBasic"
import Judul from "../../Components/Judul/Judul"
import NavigationBar from "../../Components/Navbar/NavigationBar"
import SearchBar from "../../Components/SearchBar/SearchBar"
import "./ListMovie.css"

function ListMovies() {
    return(
        <>
            <NavigationBar/>
            <div style={{backgroundColor:"#1a1a1a"}}>
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
                    <div className="list-film">
                    {[...Array(10)].map(card => {
                        return (
                            <CardFilm/>
                        )
                    })}
                    </div>
                </Container>
                <FooterBasic/>
            </div>
        </>
    )
}

export default ListMovies
