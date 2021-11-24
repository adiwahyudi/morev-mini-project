import { Container } from "react-bootstrap";
import AddReview from "../../Components/AddReview/AddReview";
import InfoDetailMovie from "../../Components/InfoDetailMovie/InfoDetailMovie";
import MyReview from "../../Components/MyReview/MyReview";
import NavigationBar from "../../Components/Navbar/NavigationBar";
import UserReview from "../../Components/UserReview/UserReview";

function DetailMovie(){
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A'}}>
                <Container>
                    <InfoDetailMovie/>
                    <UserReview/>
                    <MyReview/>
                    <AddReview/>
                </Container>
            </div>
        </div>
    )
}
export default DetailMovie;
