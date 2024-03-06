/* eslint-disable react/prop-types */
import moment from 'moment';
const MyBookingCard = ({room}) => {
    const { image, price_per_night, room_description, startDate, endDate} = room || {}
  return (
    <div>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure className='lg:w-1/2'>
          <img
            src={image}
            alt="Album"
            className='max-h-[400px] w-full'
          />
        </figure>
        <div className="card-body">
            <div>
          <h2 className="text-2xl text-orange-950 font-medium">{room_description}</h2>
          <p></p>
          <p className='text-lg'><span className='text-orange-900'>Check In Date</span>: {moment(startDate).format("MMMM Do YYYY, h:mm:ss a")} </p>
          <p className='text-lg'><span className='text-orange-900'>Check Out Date</span>: {moment(endDate).format("MMMM Do YYYY, h:mm:ss a")} </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
