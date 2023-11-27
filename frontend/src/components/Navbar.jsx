/* eslint-disable react/prop-types */
import { useState } from "react";
import apply from "/assets/apply.svg";
import menu from "/assets/cyanMenu.svg";
import email from "/assets/email-alt.svg";
import phone from "/assets/gsm.svg";
import { Link, useNavigate } from "react-router-dom";
import specialties from "../specialties.json";
import logo from "/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialty } from "../redux/jobSlice";
import { logout } from "../redux/userSlice";
import LogoutModal from "./LogoutModal";
function Navbar({ setOpenModal }) {
  const userEmail = useSelector((state) => state.user.email);
  const connected = useSelector((state) => state.user.connected);
  console.log(userEmail);
  console.log(connected);
  const [navCollapse, setNavCollapse] = useState(false);
  const [collapseJobs, setCollapseJobs] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToSpecialtyJobs = (specialty, e) => {
    e.preventDefault();
    console.log(specialty.title);
    dispatch(getSpecialty(specialty));
    navigate(`/jobs/${specialty.title}/${specialty.id}`);
  };
  const [activeItem, setActiveItem] = useState(null);
  const handleUnderline = (navItem) => {
    setActiveItem(navItem);
  };

  return (
    <header
      onMouseLeave={() => setCollapseJobs(false)}
      className="flex z-30  text-sm  items-center lg:justify-center  bg-white/95 p-10 md:p-[1.4rem] space-x-2 text-md sticky top-0 shadow-xl text-black font-normal w-full tracking-wider">
      <div className="mt-1 absolute p-2 left-8 w-[8rem]  ">
        <Link to="/">
          <img className="object-cover" src={logo} alt="logo" />
        </Link>
      </div>
      <section className="justify-evenly hidden lg:flex items-center w-full">
        <nav className="relative pl-24 ">
          <ul className="flex gap-6 uppercase text-xs ">
            <Link
              onClick={() => handleUnderline("home")}
              id="home"
              to="/"
              className={`${
                activeItem === "home"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              Home
            </Link>
            <Link
              onClick={() => handleUnderline("about")}
              to="/about"
              className={`${
                activeItem === "about"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              About
            </Link>
            <Link
              onClick={() => handleUnderline("services")}
              to="/services"
              onMouseEnter={() => setCollapseJobs(false)}
              className={`${
                activeItem === "services"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              Services
            </Link>
            <Link
              onClick={() => handleUnderline("jobs")}
              to="/jobs"
              onMouseEnter={() => setCollapseJobs(true)}
              className={`${
                activeItem === "jobs"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              Jobs
              <div
                onMouseLeave={() => setCollapseJobs(false)}
                className={`${
                  collapseJobs
                    ? "h-max absolute top-[3.15rem] border-[1.5px] border-gray-200 w-max rounded-sm bg-white shadow-xl  pt-4 pb-8 px-8 font-normal text-gray-700"
                    : "hidden"
                }`}>
                <div className="w-max z-50">
                  <span className="text-blue-950 absolute cursor-default text-lg mb-2">
                    JOBS LISTINGS
                  </span>
                  <div className="grid grid-cols-3 gap-x-16 w-max  pt-10 gap-y-3">
                    {specialties.map((specialty) => (
                      <span
                        onClick={(e) => goToSpecialtyJobs(specialty, e)}
                        key={specialty.id}
                        className="hover:text-cyan-500 text-xs hover:underline decoration-[1.3px]  decoration-gray-400 hover:ml-2 transition-all duration-300 ease-linear">
                        {specialty.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              id="contact"
              onClick={() => handleUnderline("contact")}
              to="/contact"
              onMouseEnter={() => setCollapseJobs(false)}
              className={`${
                activeItem === "contact"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              {" "}
              Contact
            </Link>
            <Link
              id="testimonials"
              onClick={() => handleUnderline("testimonials")}
              to="/testimonials"
              className={`${
                activeItem === "testimonials"
                  ? "relative underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                  : "relative hover:underline underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
              } `}>
              {" "}
              Testimonials
            </Link>
          </ul>
        </nav>
        <div className="flex  items-center gap-6 justify-center ">
          {connected ? null : (
            <div className="flex gap-1 py-2 text-xs  items-center ">
              <img className="w-[1.5rem] cursor-pointer" src={apply} alt="" />
              <Link
                onClick={() => handleUnderline("join")}
                to="/login"
                className={`${
                  activeItem === "join"
                    ? "relative underline underline-offset-4 uppercase decoration-[2px] decoration-blue-800 cursor-pointer"
                    : "relative hover:underline uppercase underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer"
                } `}>
                Join
              </Link>
            </div>
          )}

          <div className="flex gap-1 py-2  items-center">
            <img className="w-[1.5rem]" src={phone} alt="phone" />
            <span className="text-xs">+216-546456-25</span>
          </div>
          <div className="flex gap-2 py-2   items-center">
            <img className="w-[1.5rem]" src={email} alt="" />
            <span className="text-xs">medical@gmail.com</span>
          </div>
          {userEmail && (
            <div className="flex items-center gap-4">
              <span className="text-xs bg-cyan-600 text-white py-1 rounded-full px-4 ">
                {userEmail}
              </span>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-transparent border-2 hover:bg-black hover:text-white  rounded-sm transition-colors ease-linear duration-300 px-4 py-[2px] border-gray-700 text-black uppercase text-[0.7rem] font-[500] tracking-wider">
                Logout
              </button>
            </div>
          )}
        </div>
      </section>
      {/* BURGER MENU */}
      <section className="absolute rounded-full border-[1.5px] hover:border-cyan-500  border-cyan-300 lg:hidden  right-24">
        <img
          onClick={() => setNavCollapse(!navCollapse)}
          className="w-[1.5rem] cursor-pointer"
          src={menu}
          alt="collapse navbar"
        />
        {navCollapse ? (
          <nav className="relative bg-white   ">
            <ul className="flex flex-col right-0  top-1 border-2 py-2 border-gray-200 rounded absolute bg-white uppercase ">
              <Link
                to="/"
                className="relative  hover:underline px-8 py-2 underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer ">
                Home
              </Link>
              <Link
                to="/about"
                className=" relative hover:underline px-8 py-2  underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer ">
                About
              </Link>
              <Link
                to="/services"
                onMouseEnter={() => setCollapseJobs(false)}
                className="relative hover:underline px-8 py-2  underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer ">
                Services
              </Link>
              <Link
                to="/jobs"
                onMouseEnter={() => setCollapseJobs(true)}
                className={`  relative hover:underline px-8 py-2  underline-offset-4 decoration-[2px] decoration-blue-800 cursor-pointer `}>
                Jobs
                <div
                  onMouseLeave={() => setCollapseJobs(false)}
                  className={`${
                    collapseJobs
                      ? " h-max absolute z-50  left-0 top-0 border-[1.5px] border-gray-200 w-max rounded-sm bg-white shadow-xl  pt-4 pb-8 px-8 font-normal text-gray-700"
                      : "hidden"
                  }`}>
                  <div className="w-max ">
                    <span className="text-blue-950 absolute cursor-default text-lg mb-2">
                      JOBS LISTINGS
                    </span>
                    <div className="grid grid-cols-1 h-screen  w-max   pt-10 gap-y-1">
                      {specialties
                        // .sort((a, b) => a.title.localeCompare(b.title))
                        .map((specialty) => (
                          <span
                            onClick={(e) => goToSpecialtyJobs(specialty, e)}
                            key={specialty.id}
                            className="hover:text-cyan-500 text-[0.6rem] hover:underline decoration-[1.3px]  decoration-gray-400 hover:ml-2 transition-all duration-300 ease-linear">
                            {specialty.title}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/contact"
                onMouseEnter={() => setCollapseJobs(false)}
                className=" relative px-8 py-2  hover:underline underline-offset-4
            decoration-[2px] decoration-blue-800 cursor-pointer ">
                {" "}
                Contact
              </Link>
              <div className="flex flex-col items-start ">
                <div className="flex gap-1 py-2 px-6 items-center ">
                  <img
                    className="w-[1.5rem] cursor-pointer"
                    src={apply}
                    alt=""
                  />
                  <Link
                    to="/login"
                    className="uppercase hover:underline underline-offset-4 decoration-[2px]  decoration-blue-800 cursor-pointer">
                    Join
                  </Link>
                </div>
                <div className="flex gap-1 py-2 px-6 items-center">
                  <img className="w-[1.5rem]" src={phone} alt="phone" />
                  <span className="">+216-546456-25</span>
                </div>
                <div className="flex gap-2 py-2 px-6 pr-12 items-center">
                  <img className="w-[1.5rem]" src={email} alt="" />
                  <span className="text-xs">medical@gmail.com</span>
                </div>
              </div>
            </ul>
          </nav>
        ) : null}
      </section>
    </header>
  );
}

export default Navbar;
