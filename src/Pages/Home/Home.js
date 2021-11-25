import { Container } from "react-bootstrap";
import CardFilm from "../../Components/Card/CardFilm";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Judul from "../../Components/Judul/Judul";
import NavigationBar from "../../Components/Navbar/NavigationBar";

function Home(){
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <Judul judul="Featured Movie"/>
                    <Carousels/>
                    <h3 className="px-3" style={{color:'white'}}>Top Rated Movie</h3>
                    <CardFilm/>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;