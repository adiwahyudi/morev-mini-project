import { Container } from "react-bootstrap";
import Carousels from "./Carousels/Carousels";
import NavigationBar from "./Navbar/NavigationBar";

function Home(){
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <hr style={{borderTop:'3px solid white',marginTop:56,marginBottom:0,display:'block',opacity:100}}/>
                    <Carousels/>
                </Container>
            </div>
        </div>
    )
}

export default Home;