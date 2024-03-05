import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Container from "../../components/shared/Container";

const Review = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  if(isLoading){
    return <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-orange-600"></span>
    </div>
}

  return (
    <div className="my-16">
        <div className="text-center mb-3">
            <h1 className="text-3xl font-medium text-orange-800">TESTIMONIALS</h1>
            <p>What Our Guest Say</p>
        </div>
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="card max-w-md mx-auto bg-orange-50 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={review?.image}
                  alt="clientImage"
                  className="rounded-full w-40"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{review?.name}</h2>
                <p>{review?.review}</p>
                <div className="card-actions">
                <Rating style={{ maxWidth: 250 }} value={parseInt(review?.rating)}  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
    </div>
  );
};

export default Review;
