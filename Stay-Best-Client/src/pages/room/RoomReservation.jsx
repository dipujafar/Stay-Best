/* eslint-disable react/prop-types */
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import { toast } from "react-toastify";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
// eslint-disable-next-line react/prop-types
const RoomReservation = ({ roomData }) => {
  const [enable, setEnable] = useState(false);
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const totalDays = parseInt(formatDistance(new Date(date?.startDate), new Date(date?.endDate)).split(" ")[0])
  const totalPrice = totalDays * roomData?.price_per_night;

  const handleBook = async () => {
    const { startDate, endDate } = date || {};
    const { _id, image, price_per_night, room_description } = roomData || {};

    const bookData = {
      roomId: _id,
      image,
      price_per_night,
      room_description,
      startDate,
      endDate,
      email: user?.email,
      totalPrice
    };
      const checkIn = moment(startDate);
      const today = moment();

    if(today.isAfter(checkIn)){
      return toast.error("This Date Is Over")
    }

    else{
    const res = await axiosSecure.post("/books", bookData);
    if (res.data.insertedId) {
      toast.success("Successfully Booked ");
      navigate("/myBooking")
    }
  }
  };

  const handleSelect = (ranges) => {

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
          {enable ? (
            <>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-orange-900 text-white w-full uppercase"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Book Now
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-base-300">
                  <h3 className="font-bold text-xl text-center text-orange-900">
                    Booking Summary
                  </h3>
                  <h3 className="font-bold text-lg text-orange-900">
                    {roomData?.room_description}
                  </h3>
                  <p className=" pt-2 text-lg">
                    Price Per Night : ${roomData?.price_per_night}
                  </p>
                  <p className="text-lg">Total Price : ${totalPrice}</p>
                  <p className="text-lg">Check In Date : {moment(date?.startDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  <p className="text-lg">Check Out Date : {moment(date?.endDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal or confirm */}

                      <button
                        onClick={handleBook}
                        className="btn bg-orange-900 text-white mr-2"
                      >
                        Confirm
                      </button>

                      <button className="btn btn-error btn-outline">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </>
          ) : (
            <button className="btn btn-disabled w-full uppercase">
              Book Now
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default RoomReservation;
