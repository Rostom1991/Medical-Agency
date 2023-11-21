import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  const goToJoin = () => {
    navigate("/login");
  };
  const goToTestimonials = () => {
    navigate("/testimonials");
  };
  return (
    <div className="bg-[url('/assets/heroMedicalBG.jpg')] bg-no-repeat bg-cover md:bg-top bg-center   bg-blend-overlay bg-blue-950/60  md:h-[90vh]">
      <div className="flex flex-col md:pl-52 items-center md:items-start  gap-4 sm:w-8/12 py-24 md:py-0 md:pt-48">
        <motion.h1
          initial={{ x: "-150vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="sm:text-3xl text-xl text-left font-semibold text-cyan-100">
          Where <span className="text-orange-400">Compassion</span> Meets
          Careers!
        </motion.h1>
        <motion.h1
          initial={{ x: "-150vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="sm:text-7xl text-4xl text-center md:text-right font-bold text-cyan-400">
          <span className=" text-white text-5xl mr-2">Join</span>Our Healthcare
          Community
          <span className="text-xl  text-orange-400 uppercase ">
            In Germany
          </span>
        </motion.h1>
        <div className=" flex gap-4 md:justify-start justify-center w-full">
          <motion.button
            initial={{ x: "+500vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "linear" }}
            onClick={goToJoin}
            className="bg-cyan-500 md:px-20 px-16  py-2  w-fit mt-4 border-cyan-600 shadow-xl border-2 md:text-lg text-md hover:bg-cyan-50 transition-colors duration-500 ease-linear hover:text-cyan-700 text-white font-semibold rounded-full">
            Join
          </motion.button>
          <motion.button
            initial={{ x: "+500vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            onClick={goToTestimonials}
            className="bg-white md:px-12 px-10 py-2 text-cyan-700 md:text-lg  w-fit mt-4 hover:border-cyan-950 shadow-xl border-2 hover:bg-cyan-950 transition-colors duration-500 hover:text-white ease-linear  font-semibold rounded-full">
            Testimonials
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
