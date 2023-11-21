import cv from "/assets/cv.svg";
import thumb from "/assets/hand-thumb-up.svg";
import trophy from "/assets/trophy.svg";
import next from "/assets/next-filled.svg";
import map from "/assets/mapIMG.jpg";
import plane from "/assets/planeIMG.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <div className=" py-8 sm:pt-16 sm:py-0 grid place-content-center">
      <div className="grid sm:grid-cols-2 px-20 gap-8">
        <div className="flex flex-col gap-8 p-8">
          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ x: "+200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="sm:text-5xl text-3xl text-center md:text-left text-blue-950 font-medium">
              About{" "}
              <span className="text-cyan-600 sm:text-4xl">
                Viridis Recruitment Agency
              </span>
            </motion.h1>
            <div className="w-[3rem] mb-8  bg-cyan-500 h-[0.2rem] rounded-sm"></div>

            <motion.p
              initial={{ x: "+200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
              className="leading-relaxed text-gray-500">
              At Viridis Medial Recruitment, we are specialists in medical
              recruitment. We are responsible for finding and selecting
              healthcare professionals for various medical establishments:
              public hospitals, clinics, private practices, nursing homes, etc.
              But we also aggregate medical advertisements for professionals
              looking to work in a medical job in Germany.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2  border-sm">
            <motion.h1
              initial={{ x: "+200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
              className="sm:text-4xl text-3xl text-blue-950 ">
              Medical Offers
            </motion.h1>
            <div className="w-[3rem] mb-8 bg-cyan-500 h-[0.2rem] rounded-sm"></div>

            <motion.p
              initial={{ x: "+200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "linear" }}
              className="text-gray-500">
              Are you looking for a medical job in a particular sector? Check
              out all the offers available through our medical job offers on
              Viridis Recruitment Agency. As experts in medical recruitment, we
              collect medical advertisements from several institutions scattered
              throughout Germany, and we help medical and paramedical
              professionals to find a suitable position for them.
            </motion.p>
          </div>
        </div>
        <div className="p-0 md:p-2 z-[-1]  grid place-content-center relative">
          <img
            className="w-[20%] z-20 absolute md:top-36 opacity-60 md:left-48 left-28 top-8"
            src={plane}
            alt="plane"
          />
          <img className="z-10" src={map} alt="map" />
        </div>
      </div>
      <section className="lg:px-20 px-8 my-32 ">
        <div className="grid md:grid-cols-3   lg:px-16 rounded md:gap-2 gap-8 py-4 ">
          <div className="flex  items-center bg-cyan-100 relative  hover:shadow-2xl  p-6  justify-center gap-8">
            <div className="bg-white p-3 w-[5rem] h-[4rem] rounded-full">
              <img className="w-full h-full" src={thumb} alt="find job" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="uppercase text-blue-950">Find Jobs</h1>
              <span className="text-gray-700 text-sm">
                Find the job you are looking for
              </span>
            </div>
            <div className="w-[2.3rem] md:rotate-0 text-center md:bottom-auto md:mt-0 mt-36 rotate-[90deg] absolute z-20 bg-white p-1 rounded-full ring-[1px] md:right-[-1.4rem]">
              <img src={next} alt="next" />
            </div>
          </div>
          <div className="flex items-center bg-cyan-200   relative hover:shadow-2xl p-6   justify-center gap-8">
            <div className="bg-white p-3 w-[4rem] h-[4rem] rounded-full">
              <img className="w-full h-full" src={cv} alt="cv" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="uppercase text-blue-950">CV UPLOAD</h1>
              <span className="text-gray-700 text-sm">
                Fill the form and upload your CV
              </span>
            </div>
            <div className="w-[2.3rem] md:rotate-0 rotate-[90deg] left-none md:left-[96.5%]  mt-36 md:mt-0 absolute bg-white p-1 rounded-full ring-[1px] ">
              <img src={next} alt="next" />
            </div>
          </div>

          <div className="flex items-center md:rounded-r-full bg-cyan-300   hover:shadow-2xl  p-6     justify-center gap-8">
            <div className="bg-white p-3 w-[4rem] h-[4rem] rounded-full">
              <img
                className="w-full h-full"
                src={trophy}
                alt="job application"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="uppercase text-blue-950">Job Application</h1>
              <span className="text-gray-700 text-sm">Apply for the job</span>
            </div>
          </div>
        </div>
      </section>
      <section className="min-w-full grid place-items-center gap-6  bg-cyan-700 p-12">
        <h1 className="text-2xl text-white uppercase">Have A Question?</h1>
        <span className="text-gray-100 text-md">
          We are here to help. Email us or call +44 534 643 2544
        </span>
        <button
          onClick={goToContact}
          className="border-white hover:bg-white hover:text-cyan-800 transition-colors duration-500 ease-linear border-2 py-2 uppercase px-10 text-sm tracking-widest font-semibold rounded text-white">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default About;
