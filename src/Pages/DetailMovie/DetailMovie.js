import { Container } from "react-bootstrap";
import InfoDetailMovie from "../../Components/InfoDetailMovie/InfoDetailMovie";
import NavigationBar from "../../Components/Navbar/NavigationBar";

function DetailMovie(){
    return (
        <div>
            <NavigationBar/>
            <h1 style={{color:'black'}}>Abc</h1>
            <div style={{backgroundColor:'#1A1A1A',height:700}}>
                <Container>
                    <InfoDetailMovie/>
                </Container>
            </div>
        </div>
    )
}
export default DetailMovie;
