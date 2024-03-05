import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-270px)] bg-base-300">
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;