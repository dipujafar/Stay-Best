import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import room1 from "../../assets/roomImg/room1.jpg"
import room2 from "../../assets/roomImg/room2.jpg"
import room3 from "../../assets/roomImg/room3.jpg"
import room4 from "../../assets/roomImg/room4.jpg"
import room5 from "../../assets/roomImg/room5.jpg"
import { Link } from 'react-router-dom';

const Luxurious = () => {
    return (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={room1} alt="roomImg" className='h-60 relative w-full' />
            <Link to={'/rooms'}  className="absolute z-10 bottom-0 right-28 btn  btn-outline text-white uppercase">Book Now</Link>
          </SwiperSlide>
          <SwiperSlide>
          <img src={room2} alt="roomImg" className='h-60'/>
          <Link to={'/rooms'}  className="absolute z-10 bottom-0 right-28 btn  btn-outline text-white uppercase">Book Now</Link>
          </SwiperSlide>
          <SwiperSlide>
          <img src={room3} alt="roomImg" className='h-60'/>
          <Link to={'/rooms'}  className="absolute z-10 bottom-0 right-28 btn  btn-outline text-white uppercase">Book Now</Link>
          </SwiperSlide>
          <SwiperSlide>
          <img src={room4} alt="roomImg" className='h-60'/>
          <Link to={'/rooms'}  className="absolute z-10 bottom-0 right-28 btn  btn-outline text-white uppercase">Book Now</Link>
          </SwiperSlide>
          <SwiperSlide>
          <img src={room5} alt="roomImg" className='h-60' />
          <Link to={'/rooms'}  className="absolute z-10 bottom-0 right-28 btn btn-outline  text-white uppercase">Book Now</Link>
          </SwiperSlide>
        </Swiper>
    );
};

export default Luxurious;