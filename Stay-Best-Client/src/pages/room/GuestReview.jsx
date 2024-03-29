/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards,  Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";

const GuestReview = ({ roomData, comment }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        modules={[EffectCards,  Autoplay]}
        className="mySwiper"
      >
        {comment?.map((review, inx) => (
          <SwiperSlide key={inx}>
            <div className="card max-w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={roomData?.image[0]}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{review?.user}</h2>
                <p>{review?.email}</p>
                <p className="text-xl">{review?.comment}</p>
                <div className="card-actions justify-end">
                  <div>
                  <p className="text-end">{moment(review?.timestamp).format("MMM Do YY")}</p>
                <Rating style={{ maxWidth: 200 }} value={parseInt(review?.rating)}  />
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GuestReview;
