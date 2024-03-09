import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const MeetUs = () => {
    return (
        <div className="flex flex-col gap-2 py-20 px-10 bg-base-200 md:min-h-[462px] ">
            <h1 className="mb-2 text-2xl font-medium text-orange-900">MEET US</h1>
            <p className="flex text-xl gap-4 items-center"><FiPhoneCall /> +88018.........</p>
            <p className="flex text-xl gap-4 items-center"><AiOutlineMail /> staybest@gmail.com</p>
            <p className="flex text-xl gap-4 items-center"><CiLocationOn /> --- Road, Dhaka, Bangladesh</p>
        </div>
    );
};

export default MeetUs;