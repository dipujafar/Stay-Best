import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import useAuth from "../hook/useAuth";
import Lottie from "lottie-react"
import loginAni from "../assets/image/login.json"
import { toast } from "react-toastify";
import googleImg from '../assets/image/google.png'


const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const {signIn,  singInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        const {email, password} = data || {};

        signIn(email, password)
        .then(() =>{
          toast.success("Successfully Login");
          navigate(location?.state ? location?.state : '/' )
        })
        .catch(err=>{
          setError(err.message)
        })
      };

      const handleGoogleSing = () =>{
        singInWithGoogle()
      .then(() => {
        toast.success("Success Login with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
      }
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row  justify-center items-center">
           <Helmet>
             <title>Best | Login</title>
           </Helmet>
           <div className="md:w-2/6 bg-gray-50 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
        <h1 className="text-2xl font-medium mb-5 text-center text-orange-900">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Your Email"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-900"
            />
          </div>
          {errors.email?.type === "required" && (
            <span className="text-red-400 ml-10">Email is required</span>
          )}

          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              id=""
              placeholder="Password"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-900"
            />
            <span onClick={() => setShow(!show)} className="absolute right-10">
              {show ? (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-400 ml-10">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-400 ml-10">
              Password must be 6 character.
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400 ml-10">
              Password must less then 20 character.
            </span>
          )}
          <button className="w-full btn btn-outline btn-sm">
            <input type="submit" value="Login" className="w-full" />
          </button>
          <p className="mt-2">
            Do not have account?{" "}
            <Link to="/signUp">
              <span className="text-sky-500">Sign Up</span>
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
        </form>
        <fieldset className="mt-5 border rounded border-orange-900 p-2">
            <legend className="text-center text-xl text-orange-900">
              LOGIN WITH
            </legend>
            <p onClick={handleGoogleSing} className="flex justify-center item-center">
              <img src={googleImg} alt="" className="w-10" />
            </p>
          </fieldset>
      </div>

      <div className="w-1/2 hidden md:block">
        <Lottie animationData={loginAni} ></Lottie>
      </div>
        </div>
    );
};

export default Login;