import Container from "../../components/shared/Container";
import roomPool from "../../assets/roomImg/roomPool.jpeg";
import room5 from "../../assets/roomImg/room5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-16 pb-20 flex flex-col lg:flex-row justify-between gap-5  items-center bg-[url('https://i.ibb.co/kGzRcHV/aboutBg.png')]">
          <div className="lg:w-1/2 p-5">
            <h1 className="font-semibold text-2xl mb-5">
              <span className="text-orange-800 uppercase">About</span> US
            </h1>
            <p className="text-lg text-orange-900">
              Indulge in opulence at Stay Best Hotel, a lavish retreat spanning
              five floors with 50 exquisite rooms, complemented by a refreshing
              pool. Nestled in a breathtaking locale, each room offers a
              picturesque view, adorned with elegant aesthetics. Our dedicated
              team of 100+ employees ensures unparalleled service, delivering
              excellence at every turn. Immerse yourself in the beauty of our
              surroundings and experience the epitome of luxury, where every
              detail is meticulously curated for an unforgettable stay.
            </p>
           
            <Link> <p className="">See More ..... </p></Link>
          </div>
          <div className="relative">
            <img
              src={room5}
              alt="AboutUsImage"
              className="md:w-[300px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
            <img
              src={roomPool}
              alt="AboutUsImage"
              className="absolute hidden md:block  top-32 md:right-48"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
