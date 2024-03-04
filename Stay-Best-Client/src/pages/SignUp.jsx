import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { useState } from "react";
import { imageUpload } from "../api/image";
import useAuth from "../hook/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Lottie from "lottie-react";
import signUpAni from "../assets/image/sign_up-ani.json"

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const {signUp} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {name, image, email, password} = data || {};
    const imageFile = image[0];
    const imageData = await imageUpload(imageFile);
    console.log(imageData?.data?.url);

    signUp(email, password)
    .then(res=>{
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageData?.data?.url
      })
     .then(()=>{
      console.log(res.user);
     })
     .catch(err=>{
      setError(err?.message);
     })
    })
    .catch(err=>{
      setError(err.message);
    })
  }

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row justify-center items-center">
      <Helmet>
        <title>Best | Sign Up</title>
      </Helmet>
      
      <div className="md:w-2/6 bg-gray-50 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
        <h1 className="text-2xl font-medium mb-5 uppercase text-center text-orange-900">
         Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name input */}
        <div className="flex items-center mb-5 ">
            <label>
              <MdPeopleAlt className="text-2xl"></MdPeopleAlt>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              id=""
              placeholder="Your Name"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-900"
            />
          </div>
          {errors.name?.type === "required" && (
            <span className="text-red-600 ml-10">Name is required</span>
          )}

            {/* profile image */}
          <div className="mb-5">
            <label className="flex gap-2 items-center mb-2">
            <FaCamera className="text-2xl" />
              Select Profile: 
            </label>
            <input 
            type="file" 
            name="image"
            {...register("image", { required: true })} 
            id="" 
            accept="image/*"
            />
          </div>
          {errors.image?.type === "required" && (
            <span className="text-red-600 ml-10">Image is required</span>
          )}

            {/* Email image */}
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
            <span className="text-red-600 ml-10">Email is required</span>
          )}

            {/* Password input */}
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
            <span className="text-red-600 ml-10">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-600 ml-10">
              Password must be 6 character.
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-600 ml-10">
              Password must less then 20 character.
            </span>
          )}
          <button className="w-full btn  btn-outline btn-sm">
            <input type="submit" value="Sign Up" className="w-full" />
          </button>
          <p className="mt-2">
           Already have account?{" "}
            <Link to="/login">
              <span className="text-sky-500">Login</span>
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
        </form>
      </div>
      
      <div className="w-1/2 hidden md:block">
        <Lottie animationData={signUpAni} loop={false}></Lottie>
      </div>
    </div>
  );
};

export default SignUp;
