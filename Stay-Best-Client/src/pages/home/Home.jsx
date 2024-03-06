import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Luxurious from "./Luxurious";
import Review from "./Review";
import LocationMap from "./LocationMap";
import About from "./About";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Stay Best | Home</title>
            </Helmet>
            <Banner></Banner>
            <Luxurious></Luxurious>
            <About></About>
            {/* <LocationMap></LocationMap> */}
            <Review></Review>
        </div>
    );
};

export default Home;