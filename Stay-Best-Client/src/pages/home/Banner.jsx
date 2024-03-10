import { Link } from "react-router-dom";
import bannerImg from "../../assets/image/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div >
          <h1 className=" mb-2 md:mb-5 text-2xl lg:text-5xl md:text-3xl  uppercase font-bold">
          Exclusive Offers Await Your Perfect  Hotel Booking Experience.
          </h1>
          <p className="mb-5 hidden md:block max-w-3xl mx-auto">
          Do not miss this limited-time offer to elevate your getaway into a truly extraordinary escape. Reserve your  Suite Dreams experience now and let us redefine your expectations of luxury


          </p>
          <Link to={'/rooms'}  className="btn bg-gradient-to-r from-orange-700 to-orange-950 text-white uppercase">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
