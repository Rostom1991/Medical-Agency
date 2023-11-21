import { motion } from "framer-motion";
import { useEffect } from "react";
import ophtalmologist from "/assets/ophtalmologistComment.jpg";
import cardiologist from "/assets/cardiologistComment.jpg";
import neurologist from "/assets/neurologistComment.jpg";
import nurse from "/assets/nurseComment.jpg";

function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        className="lg:h-[60vh] lg:bg-right h-[40vh] flex bg-cover items-center bg-[url('/assets/testimonialsCover.jpg')] ">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
          className="lg:text-5xl text-3xl uppercase lg:pl-48 bg-cyan-700 rounded-r-full py-1 px-8 border-cyan-800/50 border-t-2 border-r-2 border-b-2 mb-4 text-white">
          Testimonials
        </motion.h1>
      </motion.div>
      <section className="bg-gray-50 py-10">
        <div className="lg:grid lg:grid-cols-2 grid grid-col-1 lg:w-[90%] lg:gap-y-16 gap-y-8  mx-auto p-8 ">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            translate={{ duration: 1, delay: 1, ease: "linear" }}
            className="flex items-center lg:w-[90%] mx-auto lg:gap-0 gap-6 justify-evenly lg:px-0 px-6 py-6 bg-white border-2 rounded-sm shadow p-0">
            <div className="flex flex-col items-center gap-2 justify-center">
              <img
                className="lg:w-[7rem] lg:h-[7rem] h-[6rem] w-[7rem] object-cover rounded-full ring-1"
                src={cardiologist}
                loading="lazy"
                alt="cardiologist comment"
              />
              <span className="text-blue-950 lg:text-[1rem] text-sm ">
                Jane Doe
              </span>
            </div>
            <div className="flex flex-col gap-2 items-end ">
              <p className="max-w-sm text-gray-500 leading-relaxed text-xs lg:text-sm">
                "Thanks to Viridis Medical Recruitment, I found the perfect
                position in Germany. Their expert guidance and personalized
                approach made all the difference. I highly recommend their
                services to any medical professional seeking opportunities
                abroad."
              </p>
              <span className="uppercase lg:text-lg text-right text-cyan-700 font-semibold">
                Cardiologist
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            translate={{ duration: 1, delay: 2, ease: "linear" }}
            className="flex items-center lg:w-[90%] mx-auto lg:gap-0 gap-6 justify-evenly lg:px-0 px-6 py-6 bg-white border-2 rounded-sm shadow p-0">
            <div className="flex flex-col items-center gap-2 justify-center">
              <img
                className="lg:w-[7rem] lg:h-[7rem] h-[6rem] w-[7rem] object-cover rounded-full ring-1"
                src={neurologist}
                loading="lazy"
                alt="neurologist comment"
              />
              <span className="text-blue-950 lg:text-[1rem] text-sm ">
                John Doe
              </span>
            </div>
            <div className="flex flex-col gap-2 items-end ">
              <p className="max-w-sm text-gray-500 leading-relaxed lg:text-sm text-xs">
                "Thanks to Viridis Medical Recruitment, I found the perfect
                position in Germany. Their expert guidance and personalized
                approach made all the difference. I highly recommend their
                services to any medical professional seeking opportunities
                abroad."
              </p>
              <span className="uppercase lg:text-lg text-right text-cyan-700 font-semibold">
                Neurologist
              </span>
            </div>
          </motion.div>
          <div className="flex items-center lg:w-[90%] mx-auto lg:gap-0 gap-6 justify-evenly lg:px-0 px-6 py-6 bg-white border-2 rounded-sm shadow p-0">
            <div className="flex flex-col items-center gap-2 justify-center">
              <img
                className="lg:w-[7rem] lg:h-[7rem] h-[6rem] w-[7rem] object-cover  rounded-full ring-1"
                src={ophtalmologist}
                loading="lazy"
                alt="ophtalmologist comment"
              />
              <span className="text-blue-950 lg:text-[1rem] text-sm ">
                John Doe
              </span>
            </div>
            <div className="flex flex-col gap-2 items-end ">
              <p className="max-w-sm text-gray-500 leading-relaxed lg:text-sm text-xs">
                "Thanks to Viridis Medical Recruitment, I found the perfect
                position in Germany. Their expert guidance and personalized
                approach made all the difference. I highly recommend their
                services to any medical professional seeking opportunities
                abroad."
              </p>
              <span className="uppercase lg:text-lg text-right text-cyan-700 font-semibold">
                Ophtalmologist
              </span>
            </div>
          </div>
          <div className="flex items-center lg:w-[90%] mx-auto lg:gap-0 gap-6 justify-evenly lg:px-0 px-6 py-6 bg-white border-2 rounded-sm shadow p-0">
            <div className="flex flex-col items-center gap-2 justify-center">
              <img
                className="lg:w-[7rem] lg:h-[7rem] h-[6rem] w-[7rem] object-cover rounded-full ring-1"
                src={nurse}
                loading="lazy"
                alt="nurse comment"
              />
              <span className="text-blue-950 lg:text-[1rem] text-sm ">
                Jane Doe
              </span>
            </div>
            <div className="flex flex-col gap-2 items-end ">
              <p className="max-w-sm text-gray-500 leading-relaxed lg:text-sm text-xs">
                "Thanks to Viridis Medical Recruitment, I found the perfect
                position in Germany. Their expert guidance and personalized
                approach made all the difference. I highly recommend their
                services to any medical professional seeking opportunities
                abroad."
              </p>
              <span className="uppercase lg:text-lg text-right text-cyan-700 font-semibold">
                Nurse
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
