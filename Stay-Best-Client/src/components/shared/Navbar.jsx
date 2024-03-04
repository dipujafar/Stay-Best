import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Container from "./Container";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [show, setShow] = useState(false);

    const handleLogout = () =>{
        logOut()
        .then(()=>{
            toast("User Successfully Logged Out")
        })
      }

  const navLinks = (
    <>
      <li className="uppercase border-2 border-orange-900 rounded-full mr-2 text-orange-800">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
         Home
        </NavLink>
      </li>
      <li className="uppercase border-2 border-orange-900 rounded-full  mr-2 text-orange-800">
      <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
         Rooms
        </NavLink>
      </li>
      <li className="uppercase border-2 border-orange-900 rounded-full mr-2 text-orange-800">
      <NavLink
          to="/myBooking"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
         My Booking
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-200">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost text-xl uppercase text-orange-700"
            >
              <div className="flex gap-2 justify-center items-center">
                <img src={logo} alt="logo_Image" className="w-10" />
                Stay <span className="text-orange-900"> Best </span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
          {user ? (
                <div className="relative">
                 <img onClick={()=>setShow(!show)} src={user?.photoURL} alt="profile_photo" className="w-10 rounded-full" />
                <div className={`absolute z-10 bg-gray-300 py-5 w-40 rounded right-0 ${show ? "top-12 right-0" : "-top-60"} duration-1000`}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={user?.photoURL} alt="profile_photo" className="w-14 rounded-full"  />
                        <div className=" font-medium uppercase">{user?.displayName}</div>
                    <button onClick={handleLogout} className="btn bg-orange-800 text-white  btn-sm">Logout</button>
                    </div>
                </div>
                </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-orange-800 text-white btn-sm">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
