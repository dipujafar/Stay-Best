import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
const RoomReservation = ({roomData}) => {
  const [enable, setEnable] = useState(false);
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();

  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleBook = async ()=>{
   
    const {startDate, endDate} = date || {}
    const  {_id, image, price_per_night, room_description} = roomData || {};

    const bookData = {
      roomId: _id,
      image,
      price_per_night,
      room_description,
      startDate,
      endDate,
      email: user?.email
    }

    const res = await axiosPublic.post("http://localhost:5000/books", bookData);
    if(res.data.insertedId){
      toast.success("Successfully Booked ")
    }

   
  }

  const handleSelect = (ranges) => {
    console.log(ranges);

    setdate({
      startDate: ranges?.selection?.startDate,
      endDate: ranges?.selection?.endDate,
      key: "selection",
    });

    setEnable(true);
  };
  {
    return (
      <div>
        <DateRangePicker ranges={[date]} onChange={handleSelect} />
        <div>
          {
            enable 
            ?
            <button
            onClick={handleBook}
            className="btn bg-orange-900 text-white w-full"
          >
            Book Now
          </button>
            :
            <button
            className="btn btn-disabled w-full "
          >
            Book Now
          </button>

          }
          
        </div>
      </div>
    );
  }
};

export default RoomReservation;
