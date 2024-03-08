import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import Container from "../../components/shared/Container";
import MyBookingCard from "./MyBookingCard";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: BookRooms = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BookingRooms"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${user?.email}`);
      return res?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-orange-600"></span>
      </div>
    );
  }

  return (
    <Container>
      <div>
        <div>
          <h1 className="text-3xl text-orange-900 uppercase font-medium">
            {" "}
            <marquee> Your Booking Rooms</marquee>{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {BookRooms.length > 0 ? (
            BookRooms.map((room) => (
              <MyBookingCard
                key={room?._id}
                room={room}
                refetch={refetch}
              ></MyBookingCard>
            ))
          ) : (
            <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
              <p className=" uppercase text-2xl font-medium">
                You have no booked room
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MyBooking;
