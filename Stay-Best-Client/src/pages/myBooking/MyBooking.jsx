import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import Container from "../../components/shared/Container";
import MyBookingCard from "./MyBookingCard";


const MyBooking = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data: BookRooms = [], isLoading} = useQuery({
        queryKey: ['BookingRooms'],
         queryFn: async ()=>{
            const res = await axiosPublic.get(`/books/${user?.email}`);
            return res?.data;
         }
    });
    console.log(BookRooms)

    if(isLoading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-orange-600"></span>
        </div>
    }

    return (
        <Container>
        <div>
            <div>
                <h1 className="text-3xl text-orange-900 uppercase font-medium"> <marquee> Your Booking Rooms</marquee> </h1>
            </div>
            <div className="grid grid-cols-1 gap-5">
                {
                    BookRooms.map(room=><MyBookingCard key={room?._id} room={room}></MyBookingCard>)
                }
            </div>
        </div>
        </Container>
    );
};

export default MyBooking;