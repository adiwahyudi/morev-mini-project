import { Container } from "react-bootstrap";
import CardFilm from "../../Components/Card/CardFilm";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import NavigationBar from "../../Components/Navbar/NavigationBar";

function Home(){
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <hr style={{borderTop:'3px solid white',marginTop:56,marginBottom:0,display:'block',opacity:100}}/>
                    <Carousels/>
                    <CardFilm/>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;