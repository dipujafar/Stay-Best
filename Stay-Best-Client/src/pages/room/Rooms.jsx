import { Helmet } from "react-helmet-async";
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from "axios";
import RoomCard from "./RoomCard";
import Container from "../../components/shared/Container";


const Rooms = () => {
    const {data: rooms = []} = useQuery({
        queryKey: ['Rooms'],
         queryFn: async ()=>{
            const res = await axios.get('data.json');
            return res?.data;
         }
    });
    console.log(rooms)
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
                rooms.map(room=><RoomCard key={room?.room_size} room={room} ></RoomCard>)
            }
           </div>
           </Container>
        </div>
    );
};

export default Rooms;