/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import GuestReview from "./GuestReview";
import RoomReservation from "./RoomReservation";

const RoomDetailsCard = ({ roomData }) => {
  const axiosPublic = useAxiosPublic()
  const {
    _id,
    image,
    price_per_night,
    room_description,
    room_size,
    availability,
    special_offers,
  } = roomData || {};

  const {data: comment = []} = useQuery({
    queryKey: ['commentView'],
     queryFn: async ()=>{
        const res = await axiosPublic.get(`/comment/${_id}`);
        return res?.data;
     }
});
  return (
    <div>
      <div className="card  card-compact bg-base-200 shadow-xl relative">
        <figure>
          <img src={image[0]} alt="Rooms_image" className="max-h-96 w-full" />
        </figure>
        <div className="card-body">
          <div className="lg:flex justify-between">
            <div>
              <h2 className="text-3xl text-orange-900">{room_description}</h2>

              <p className="text-xl inline">
                {room_size} sq. ft{" "}
                {special_offers ? (
                  <p className="text-xl inline"> {special_offers}</p>
                ) : (
                  ""
                )}
              </p>
              <p className="text-xl absolute top-0 left-0 rounded-r-full bg-orange-950 text-white px-3 py-1 ">
                {" "}
                ${price_per_night} Per Night
              </p>
              {availability ? (
                <p className="text-xl">Availability: Available</p>
              ) : (
                ""
              )}
              {special_offers ? (
                <p className="text-xl">Offer: {special_offers}</p>
              ) : (
                ""
              )}
              <div className="mt-5 max-w-[500px] px-5">
                <h1 className="text-xl">Guest Reviews:</h1>
                <div className="mt-2">
                  { comment?.length > 0 ?
                    <GuestReview roomData={roomData} comment={comment}></GuestReview>
                    :
                    <p className="text-2xl mt-5"><marquee> No Reviews </marquee></p>
                    }
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl text-center mb-2">Pike Booking Date </p>
              <div className="overflow-auto">
                {" "}
                <RoomReservation roomData={roomData}></RoomReservation>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">{/*  */}</div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCard;
