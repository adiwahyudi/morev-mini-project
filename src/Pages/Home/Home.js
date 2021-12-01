import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import CardFilm from "../../Components/Card/CardFilm";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Judul from "../../Components/Judul/Judul";
import NavigationBar from "../../Components/Navbar/NavigationBar";
import useGet3Featured from "../../Hooks/useGet3FeaturedMovies";
import useGetTop5Movies from '../../Hooks/useGet5TopRatedMovies'
import Loading from "../../Components/Loading/Loading";

function Home(){

    const {dataTop5,loadingTop5,errorTop5} = useGetTop5Movies()
    const {dataFeatured3,loadingFeatured3,errorFeatured3} = useGet3Featured()

    const [top5,setTop5] = useState([]);
    const [featured3,setFeatured3] = useState([]);

    useEffect(() => {
        if (dataTop5) {
            setTop5(dataTop5.movies);
        }
        if (dataFeatured3) {
            setFeatured3(dataFeatured3.movies);
        }
    }, [dataTop5,dataFeatured3]);

    if (errorTop5 || errorFeatured3 ) {
        return <h1>Error</h1>
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <NavigationBar/>
            <div style={{backgroundColor:'#1A1A1A',paddingBottom:10}}>
                <Container>
                    <Judul judul="Featured Movie"/>
                    {loadingFeatured3 ? (
                        <Loading/>
                    ) : (
                        <Carousels 
                            featured={featured3}
                        />
                    )}
                    <h3 className="px-3" style={{color:'white'}}>Top Rated Movie</h3>
                    {loadingTop5 ? (
                        <Loading/>
                    ) : (
                        <CardFilm 
                            films={top5}
                            id="toprated"
                        />   
                    )}
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;