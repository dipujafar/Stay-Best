import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
// import {useNavigate} from "react-router-dom"
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              return <Navigate to="login"></Navigate>;
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut]);
  return axiosSecure;
};

export default useAxiosSecure;
