import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Luxurious from "./Luxurious";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Stay Best | Home</title>
            </Helmet>
            <Banner></Banner>
            <Luxurious></Luxurious>
            <Review></Review>
        </div>
    );
};

export default Home;