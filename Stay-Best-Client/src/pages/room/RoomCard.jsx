/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { IoMdPhotos } from "react-icons/io";

const RoomCard = ({ room }) => {
  const axiosPublic = useAxiosPublic();
  const { _id, image, price_per_night, room_description } = room || {};
  const { data: comment = [] } = useQuery({
    queryKey: ["comment", _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comment/${_id}`);
      return res?.data;
    },
  });
  console.log(image);
  return (
    <Link to={`/roomDetails/${_id}`}>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <div className="group card card-compact  bg-base-100 shadow-xl ">
        <figure className="relative">
          <Swiper navigation={true}   modules={[Navigation, Autoplay]} className="mySwiper">
            {
                image?.map((img,inx)=><SwiperSlide key={inx}><img src={img} alt="roomImg" className="h-64 w-full group-hover:scale-125 duration-1000"></img></SwiperSlide>)
            }
            
          </Swiper>
          <div className="z-10 absolute bg-gray-600 py-1 px-2 rounded bottom-2 right-2 text-white flex items-center gap-2">
          <IoMdPhotos />
            <p>{image?.length}</p>
          </div>
        </figure>
        <div className="px-2 mb-2">
          <p className="text-xl font-medium text-orange-950">
            {room_description}
          </p>
          <div className="flex justify-between">
            <p>${price_per_night} Per Night</p>
            <p>Reviews: {comment?.length} </p>
          </div>
        </div>
       
      </div>
    </Link>
  );
};

export default RoomCard;
