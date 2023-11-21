import { useSelector } from "react-redux";
import doctor from "/assets/applyIMG.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Apply() {
  const job = useSelector((state) => state.medical.selectJob);
  const connected = useSelector((state) => state.user.connected);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState({});
  const [disable, setDisable] = useState(false);
  console.log(resume);
  console.log("resume", resume);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const user = { name, email, phone, resume, job };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (connected) {
      setDisable(true);
      await axios
        .post("http://localhost:5000/apply", user, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setDisable(false);
          setError(false);
          setSuccess(response.data.message);
        })
        .catch((error) => {
          setDisable(false);
          setSuccess(false);
          setError(error.response.data.error);
          console.log(error);
        });
    } else {
      setSuccess(false);
      setError("You should login to apply!");
      localStorage.setItem("lastLocation", window.location.pathname);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-[30vh] bg-gradient-to-t from-cyan-400 to-cyan-700 flex flex-col items-center gap-2 justify-center">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="md:text-5xl text-4xl text-white uppercase tracking-widest">
          Apply Online
        </motion.h1>
        <motion.span
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
          className="lg:text-[1rem] text-sm tracking-wide text-cyan-900 font-semibold uppercase">
          For <span className="text-cyan-950">{job.title}</span> Position{" "}
        </motion.span>
      </div>
      <section className="w-10/12 lg:flex mx-auto  my-16 border-2 rounded box-shadow-apply">
        <form
          onSubmit={handleSubmit}
          className="flex lg:w-1/2 flex-col gap-6 py-16 items-center">
          <span className="text-3xl tracking-wider text-cyan-700 uppercase font-semibold">
            {" "}
            {job.title}{" "}
          </span>
          <div className="flex flex-col gap-2 w-[80%]">
            <span className="uppercase tracking-wide text-sm">
              Full Name <span className="text-red-500">*</span>
            </span>
            <input
              className="bg-gray-200 placeholder:uppercase text-gray-700 outline-none rounded-sm focus:shadow border-[1px] focus:border-gray-400 text-sm py-3 pl-8 placeholder:text-xs"
              type="text"
              name="name"
              placeholder="Full Name.."
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-[80%]">
            <span className="uppercase tracking-wide text-sm">
              Email <span className="text-red-500">*</span>
            </span>
            <input
              className="bg-gray-200 placeholder:uppercase text-gray-700 outline-none rounded-sm focus:shadow border-[1px] focus:border-gray-400 text-sm py-3 pl-8 placeholder:text-xs"
              type="text"
              name="email"
              placeholder="Email.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-[80%]">
            <span className="uppercase tracking-wide text-sm">
              Phone Number <span className="text-red-500">*</span>
            </span>
            <input
              className="bg-gray-200 placeholder:uppercase text-gray-700 outline-none rounded-sm focus:shadow border-[1px] focus:border-gray-400 text-sm py-3 pl-8 placeholder:text-xs"
              type="text"
              name="phone"
              placeholder="Phone Number.."
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-[80%]">
            <span className="uppercase tracking-wide text-sm">
              Attach Resume <span className="text-red-500">*</span>
            </span>
            <input
              className="bg-gray-200 file:bg-cyan-600 file:flex-row file:mr-56 file:cursor-pointer file:w-1/5 file:py-1 file:px-0  file:rounded-full file:border-none file:ring-1 file:ring-gray-400 uppercase text-gray-700 outline-none rounded-sm focus:shadow border-[1px] file:text-white focus:border-gray-400 text-sm py-2 file:ml-8 placeholder:text-xs"
              type="file"
              accept=".pdf"
              name="resume"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </div>
          <button
            disabled={disable}
            className="bg-cyan-600 py-2 px-12 w-1/2 text-white uppercase tracking-widest mt-6 rounded-full hover:bg-cyan-800 transition-colors duration-300 ease-linear">
            Apply
          </button>
          {error && (
            <span className="text-red-600 text-sm bg-red-100 py-1 px-6 ">
              {error}
            </span>
          )}
          {success && (
            <span className="text-cyan-600 text-sm bg-cyan-100 py-1 px-6 ">
              {success}
            </span>
          )}
        </form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="lg:w-1/2  ">
          <img className="h-full object-cover" src={doctor} alt="doctor" />
        </motion.div>
      </section>
    </div>
  );
}

export default Apply;
