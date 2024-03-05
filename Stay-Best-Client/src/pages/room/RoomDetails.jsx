import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import RoomDetailsCard from "./RoomDetailsCard";
import Container from "../../components/shared/Container";


const RoomDetails = () => {
    const roomData = useLoaderData();
    console.log(roomData) 
    return (
        <Container>
           <Helmet>
            <title>StayBest | Room Details</title>
           </Helmet>
           <RoomDetailsCard roomData={roomData}></RoomDetailsCard>
        </Container>
    );
};

export default RoomDetails;