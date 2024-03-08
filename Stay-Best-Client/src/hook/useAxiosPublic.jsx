import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://stay-best-server.vercel.app"
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;

