/* eslint-disable react/prop-types */
import moment from "moment";
import { Rating } from "@smastrom/react-rating";
import { useRef, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import axios from "axios";
import { toast } from "react-toastify";

const MyBookingCard = ({ room, refetch }) => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const reviewRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    roomId,
    image,
    price_per_night,
    room_description,
    startDate,
    endDate
  } = room || {};

  const handleAddReview = async () => {
    const comment = reviewRef.current.value;
    const reviewData = {
      user: user?.displayName,
      rating,
      comment,
      email: user?.email,
      timestamp: new Date(),
    };

    const res = await axiosSecure.put(`/reviews?id=${roomId}`, reviewData);
    console.log(res?.data);
  };

  //cancel functionality
  const handleCancel = async () => {
    const today = moment();
    const checkIn = moment(startDate);
    if(today.isAfter(checkIn) || today.isSame(checkIn)){
      toast.error("Time Over");
    }
    else{
      const res = await axiosSecure.delete(`/books/${_id}`);
      if(res?.data?.deletedCount > 0){
        refetch()
        toast.success("Successfully Cancel Booking")
      }
    }
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={image} alt="Album" className="max-h-[400px] w-full" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-2xl text-orange-950 font-medium">
              {room_description}
            </h2>
            <p></p>
            <p className="text-lg">
              <span className="text-orange-900">Check In Date</span>:{" "}
              {moment(startDate).format("MMMM Do YYYY, h:mm:ss a")}{" "}
            </p>
            <p className="text-lg">
              <span className="text-orange-900">Check Out Date</span>:{" "}
              {moment(endDate).format("MMMM Do YYYY, h:mm:ss a")}{" "}
            </p>
            <p className="text-lg">
              <span className="text-orange-900">Price Per Night</span>:{" "}
              {price_per_night}{" "}
            </p>
            <p className="text-lg">
              <span className="text-orange-900">Total Price</span>:{" "}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="flex gap-1">
              {/* Add review section */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Add Review
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-base-200">
                  <form onSubmit={handleAddReview}>
                    <div>
                      <label className="block">
                        Please Share Your Review :
                      </label>
                      <textarea
                        name="review"
                        placeholder="Review"
                        ref={reviewRef}
                        className="w-full px-2 py-1 border border-black"
                      ></textarea>
                      <div>
                        <label className="block">Please Rate Us:</label>
                        <Rating
                          style={{ maxWidth: 250 }}
                          value={rating}
                          onChange={setRating}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button
                        onClick={handleAddReview}
                        className="btn btn-outline mr-1"
                      >
                        Send
                      </button>
                      <button className="btn btn-outline btn-error">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              <button className="btn btn-outline">Update</button>
              <button
                onClick={handleCancel}
                className="btn btn-outline btn-error"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
