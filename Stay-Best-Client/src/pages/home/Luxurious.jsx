import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import room1 from "../../assets/roomImg/room1.jpg";
import room2 from "../../assets/roomImg/room2.jpg";
import room3 from "../../assets/roomImg/room3.jpg";
import room4 from "../../assets/roomImg/room4.jpg";
import room5 from "../../assets/roomImg/room5.jpg";
import room6 from "../../assets/roomImg/rooms7.jpeg";
import room7 from "../../assets/roomImg/room8.jpeg";
import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";

const Luxurious = () => {
  return (
    <div>
      <Container>
      <div className="text-center my-5">
        <h1 className="text-3xl text-orange-800 uppercase font-medium">
         Our Luxurious Rooms
        </h1>
        <p></p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={room1}
            alt="roomImg"
            className=" h-40 md:h-72 relative w-full"
          />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn  btn-outline  text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room2} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn  btn-outline text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room3} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex   bottom-0 right-28 btn  btn-outline text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room4} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn  btn-outline text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room5} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn btn-outline  text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room6} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn btn-outline  text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={room7} alt="roomImg" className="h-40 md:h-72" />
          <Link
            to={"/rooms"}
            className="absolute z-10  hidden lg:flex  bottom-0 right-28 btn btn-outline  text-white uppercase"
          >
            Book Now
          </Link>
        </SwiperSlide>
      </Swiper>
      </Container>
    </div>
  );
};

export default Luxurious;
