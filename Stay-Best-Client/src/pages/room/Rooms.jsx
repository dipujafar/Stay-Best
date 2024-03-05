import { Helmet } from "react-helmet-async";
import {
    useQuery,
  } from '@tanstack/react-query'
import RoomCard from "./RoomCard";
import Container from "../../components/shared/Container";
import useAxiosPublic from "../../hook/useAxiosPublic";


const Rooms = () => {
    const axiosPublic = useAxiosPublic()
    const {data: rooms = [], isLoading} = useQuery({
        queryKey: ['Rooms'],
         queryFn: async ()=>{
            const res = await axiosPublic.get('/rooms');
            return res?.data;
         }
    });

    if(isLoading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-orange-600"></span>
        </div>
    }

    return (
        <div className="bg-base-300 min-h-screen">
            <Helmet>
             <title>Stay Best | Rooms</title>
           </Helmet>
            <Container>
                <div>
                    <marquee className="text-3xl uppercase text-orange-900"> Available Rooms</marquee>
                </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                rooms.map(room=><RoomCard key={room?._id} room={room} ></RoomCard>)
            }
           </div>
           </Container>
        </div>
    );
};

export default Rooms;