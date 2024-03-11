import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Luxurious from "./Luxurious";
import Review from "./Review";
import About from "./About";
import ViewVideo from "./ViewVideo";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Stay Best | Home</title>
            </Helmet>
            <Banner></Banner>
            <ViewVideo></ViewVideo>
            <Luxurious></Luxurious>
            <About></About>
            {/* <LocationMap></LocationMap> */}
            <Review></Review>
        </div>
    );
};

export default Home;