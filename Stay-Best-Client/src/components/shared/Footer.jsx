import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Container from "./Container";
const Footer = () => {
  return (
   
    <footer className="md:p-10 bg-base-300 rounded ">
         <Container>
           
            <div>
      <div className="flex justify-center flex-wrap">
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl font-medium text-orange-900">Call</h3>
          <p>+880-195-----</p>
        </div>
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl  font-medium text-orange-900">Visit</h3>
          <p>--- road, ---</p>
        </div>
        <div className="md:mr-20 text-center">
          <h3 className="text-2xl  font-medium text-orange-900">Email</h3>
          <p>staybest@gmal.com</p>
        </div>
      </div>
      <h2 className="text-center text-2xl text-orange-900 mt-5">
      Elevate Your Stay Where Luxury Meets Comfort and Style .....
      </h2>
      <div className="flex gap-5 text-2xl justify-center mt-4">
        <a href="#">
          <FaFacebook></FaFacebook>
        </a>
        <a href="#">
          <FaTwitter></FaTwitter>
        </a>
        <a href="#"> 
          <FaInstagram></FaInstagram>
        </a>
      </div>
      <div className="text-center text-xl  mt-5">
        <h3>Copyright © 2024 - All right reserved by Stay Best</h3>
      </div>
      </div>
     
      </Container>
    </footer>
    
  );
};

export default Footer;