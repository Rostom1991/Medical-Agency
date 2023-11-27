import { useEffect, useState } from "react";
// import gmail from "/assets/google-gmail.svg";
import arrow from "/assets/arroww.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { motion } from "framer-motion";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const user = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://medical-agency-api.vercel.app/login", user)
      .then((response) => {
        console.log(response.data);
        setError(false);
        setSuccess(response.data.message);
        dispatch(login(response.data.user));
        const lastLocation = localStorage.getItem("lastLocation");
        setTimeout(() => {
          navigate(lastLocation || "/");
          localStorage.removeItem("lastLocation");
        }, 3000);

        // Add your join logic here
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full bg-gray-50/40 grid place-items-center  ">
      <section
        className="bg-cover flex flex-col items-end justify-center md:pr-72 pr-16 gap-2  bg-blend-overlay bg-black/20 bg-left lg:bg-center  bg-no-repeat
        bg-[url('/assets/loginBG.jpg')] h-[60vh] w-full">
        <motion.h1
          initial={{ x: "+200vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-white font-semibold md:text-6xl text-5xl">
          Join Us
        </motion.h1>
        <div className="flex items-center gap-2">
          <img className="w-[1.2rem] rotate-90" src={arrow} alt="arrow" />
          <motion.h1
            initial={{ x: "-200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className=" font-semibold text-xl md:text-cyan-950 text-white lg:bg-transparent bg-cyan-700 lg:px-0 px-4 ">
            LOGIN
          </motion.h1>
        </div>
      </section>
      <div className="grid gap-8 p-16 lg:my-10 w-full bg-white shadow-xl place-content-center md:w-[55%] mx-auto border-2 border-gray-100 rounded ">
        <motion.h1
          initial={{ x: "+200vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-blue-950 md:text-[2rem] text-3xl text-center">
          Welcome To <span className="text-purple-800">Viridis</span>{" "}
          Recruitment Agency!
        </motion.h1>
        <form className="py-4 my-4 flex flex-col gap-12">
          <div className="flex gap-3 items-center justify-start">
            <label className="uppercase text-sm text-cyan-800" htmlFor="email">
              Email:
            </label>
            <input
              className="outline-none bg-purple-100 focus:shadow-lg p-2 text-sm border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400 pl-2 text-gray-500 lg:w-1/2"
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-3 items-center justify-end  ">
            <label
              className="uppercase text-sm text-cyan-800"
              htmlFor="password">
              Password:
            </label>
            <input
              className="text-sm p-2 outline-none bg-purple-100 focus:shadow-lg pl-2 border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400  text-gray-500 lg:w-1/2"
              type="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-800">Remember Me?</span>
            </div>
            <div className="flex items-center ">
              <span className="underline text-gray-800 underline-offset-4 decoration-gray-300 cursor-pointer">
                Forgot Password?
              </span>
            </div>
          </div> */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSubmit}
              className="bg-purple-900 lg:text-[1rem] text-sm hover:shadow-lg hover:bg-purple-700 transition-colors duration-500 ease-linear rounded lg:px-12 px-6 py-2 text-white">
              LOGIN
            </button>
            <button
              onClick={goToSignUp}
              className="bg-white border-2  border-purple-950 hover:bg-black hover:text-white transition-colors duration-500 ease-linear rounded text-sm lg:text-[1rem] px-6 lg:px-10 py-2 text-purple-950">
              SIGN UP
            </button>
          </div>
          {/* <div className="bg-cyan-50 w-fit py-3 px-16 border-2 hover:border-gray-300 rounded-sm  hover:bg-cyan-200/75 mx-auto cursor-pointer transition-colors duration-500 ease-linear">
            <button className="flex items-center gap-2 text-sm text-gray-700">
              <img className="w-[1rem]" src={gmail} alt="gmail" />
              Login with Gmail
            </button>
          </div> */}
          {error && (
            <div className="bg-red-600 border-red-400 w-max text-sm text-white py-2 px-12 border-2  rounded-full  mx-auto ">
              <span> {error} </span>
            </div>
          )}
          {success && (
            <div className="bg-cyan-600 border-cyan-400 w-max text-sm text-white py-2 px-12 border-2  rounded-full  mx-auto ">
              <span> {success} </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
export default Login;
