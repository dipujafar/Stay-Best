import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div className="bg-base-300">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-270px)] ">
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;