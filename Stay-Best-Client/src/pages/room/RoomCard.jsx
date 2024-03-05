/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
    const {  _id, image, price_per_night, reviews, room_description
    } = room || {}
    return (
        <Link to={`/roomDetails/${_id}`}>
            <Helmet>
                <title>Rooms</title>
            </Helmet>
        <div className="group card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Room_Image" className="h-80 group-hover:scale-110 duration-500" /></figure>
            <div className='px-2 mb-2'>
                <p className="text-xl font-medium">{room_description}</p>
                <div className='flex justify-between'>
                <p>${price_per_night} Per Night</p>
                <p>Reviews: {reviews.length} </p>
                </div>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;