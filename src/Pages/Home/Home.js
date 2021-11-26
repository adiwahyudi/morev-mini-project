import { Container } from "react-bootstrap";
import CardFilmTR from "../../Components/Card/CardFilmTR";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Judul from "../../Components/Judul/Judul";
import NavigationBar from "../../Components/Navbar/NavigationBar";

function Home(){
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A',paddingBottom:10}}>
                <Container>
                    <Judul judul="Featured Movie"/>
                    <Carousels/>
                    <h3 className="px-3" style={{color:'white'}}>Top Rated Movie</h3>
                    <CardFilmTR/>    
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;