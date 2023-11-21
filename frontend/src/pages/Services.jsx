/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import arrow from "/assets/arroww.svg";
import germanFlag from "/assets/germanFlag.svg";
import student from "/assets/studentPink.jpg";
import freeAppartment from "/assets/freeAppartment.jpg";
import paidAppartment from "/assets/paidAppartment.jpg";
import diploma1 from "/assets/diploma1.jpg";
import diploma2 from "/assets/diploma2.jpg";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      <section
        className="bg-cover flex flex-col bg-fixed items-start justify-center md:pl-40 pl-16 gap-2  bg-blend-overlay bg-black/30 bg-center  bg-no-repeat
       bg-[url('/assets/servicesCover.jpg')] h-[50vh] md:h-[60vh] w-full">
        <motion.h1
          initial={{ x: "+200vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-white font-semibold text-5xl md:text-7xl ">
          Services
        </motion.h1>
        <div className="flex items-center gap-2">
          <img className="w-[1.2rem] rotate-90" src={arrow} alt="arrow" />
          <motion.h1
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
            className=" uppercase font-bold text-sm  text-cyan-300 tracking-widest ">
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* LEARN GERMAN */}
      <section className="bg-gray-100 py-12 ">
        <div className="flex flex-col md:gap-20 gap-12 shadow md:w-[75%] w-[90%] bg-white mx-auto items-center p-16">
          <section className="flex flex-col items-center md:gap-10 gap-8">
            <h1 className="md:text-4xl text-2xl text-center tracking-wider text-cyan-800 uppercase">
              Learn The German Language
            </h1>
            <p className="text-gray-600 leading-relaxed text-[0.9rem] md:text-[1.1rem] text-center">
              Joining our team as a medical specialist bound for Germany? Our
              specialized language courses ensure you're fluent and ready for
              success. Led by experienced instructors, our tailored curriculum
              guarantees effective communication with colleagues and patients,
              as well as seamless integration into German culture.
            </p>
          </section>
          <div className="w-full grid relative gap-16  place-items-start  lg:grid-cols-2">
            <div className=" flex flex-col md:gap-8 gap-6  items-center">
              <h1 className="text-white bg-cyan-800  px-8 rounded-full tracking-wider font-normal uppercase  md:text-lg">
                From A1 to B2
              </h1>
              <h1 className="text-cyan-700 leading-relaxed uppercase md:text-lg text-center ">
                Intensive German courses for beginners and advanced learners
              </h1>
              <div className="flex flex-col items-start md:gap-10 gap-6">
                <img
                  className="w-[4rem] mx-auto"
                  src={germanFlag}
                  alt="german"
                />
                <p className="text-gray-600 md:text-[1rem] text-sm text-center md:text-left">
                  "In our language school, you can enroll in language courses
                  for all levels. If you are a beginner, then the A1 course is
                  optimal. With more knowledge, you can enroll in the A2 course.
                  Advanced-level students have the choice between B1 or B2
                  courses."
                </p>
                <p className="text-gray-600 text-sm md:text-[1rem] text-center md:text-left">
                  "If you are not a beginner, choosing the right course is not
                  always easy. If you are unsure, we recommend taking a free
                  placement test. You can do this at one of our language schools
                  or online. Based on these tests, we determine your current
                  level of knowledge and assign you the optimal course."
                </p>
                <a href="https://german-school.vercel.app/" target="_blank">
                  <button className="bg-cyan-700 text-sm tracking-wider uppercase mx-auto md:mx-0 hover:bg-cyan-500 transition-colors duration-300 ease-linear text-white py-2 px-16 mt-3">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
            <div className="border-l-[1px] lg:block hidden absolute top-0 right-[50%] border-gray-200 rounded-tl-full  h-[36rem] w-[1px]"></div>
            <div className=" flex flex-col  items-center gap-6">
              <h1 className="bg-rose-400 text-white rounded-full px-8 tracking-wider font-normal uppercase lg:text-lg">
                Viridis Language School
              </h1>
              <p className="text-gray-600 leading-relaxed  text-sm md:text-[1rem] text-center ">
                Don't Speak German? No Worries, You Will Do!
              </p>
              <div className="w-full overflow-hidden shadow-lg border-2">
                <img
                  className="w-full hover:scale-105 transition-transform duration-300 ease-linear"
                  src={student}
                  alt="student"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DIPLOMA */}
      <section className="bg-gray-100 py-12 ">
        <div className="flex flex-col md:gap-16 gap-8 shadow w-[90%] md:w-[75%] bg-white mx-auto items-center p-12 md:p-16">
          <h1 className="md:text-4xl text-[1.6rem] tracking-wider text-cyan-800 uppercase">
            Your Diploma
          </h1>
          <div className="w-full grid relative md:gap-16 gap-12 place-items-center  lg:grid-cols-2">
            <div className=" flex flex-col gap-6  items-center">
              <h1 className="text-cyan-800 bg-cyan-200  px-8 rounded-full tracking-wider font-semibold uppercase text-lg">
                Diploma Recognition
              </h1>
              <p className="text-gray-500 leading-loose md:text-[1rem] text-sm text-center ">
                We handle the complexities of diploma recognition to ensure your
                qualifications meet German standards, paving the way for a
                seamless entry into the healthcare sector.
              </p>
              <div className="w-full overflow-hidden shadow-lg border-2">
                <img
                  className="w-full hover:scale-105 transition-transform duration-300 ease-linear"
                  src={diploma1}
                  alt="diploma"
                />
              </div>
            </div>
            <div className="border-l-[1px] hidden lg:block  absolute top-0 right-[50%] border-gray-200 rounded-tl-full  h-[40.5rem] w-[1px]"></div>
            <div className=" flex flex-col  items-center gap-6">
              <h1 className="text-rose-600 bg-rose-200 rounded-full px-8 tracking-wider font-semibold uppercase text-lg">
                Diploma Legalization
              </h1>
              <p className="text-gray-500 leading-loose md:text-[1rem] text-sm  text-center">
                We take care of your diploma legalization process, cooperating
                with authorities to ensure compliance with German legal
                requirements, so you can focus on your professional journey with
                confidence.
              </p>
              <div className="w-full overflow-hidden shadow-lg border-2">
                <img
                  className="w-full hover:scale-105 transition-transform duration-300 ease-linear"
                  src={diploma2}
                  alt="diploma"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* APPARTMENTS */}
      <section className="bg-gray-100 py-12 ">
        <div className="flex flex-col md:gap-16 gap-8 shadow w-[90%] md:w-[75%] bg-white mx-auto items-center p-12 md:p-16">
          <h1 className="md:text-4xl text-[1.6rem] tracking-wider text-cyan-800 uppercase">
            Appartments
          </h1>
          <div className="w-full grid relative md:gap-16 gap-12 place-items-center  lg:grid-cols-2">
            <div className=" flex flex-col gap-6  items-center">
              <h1 className="text-cyan-800 bg-cyan-200  px-8 rounded-full tracking-wider font-semibold uppercase text-lg">
                Free
              </h1>
              <p className="text-gray-500 leading-loose md:text-[1rem] text-sm text-center italic">
                Begin your medical career in Germany worry-free with our
                complimentary apartments for specialists. We believe in
                providing a comfortable home base so you can focus on your
                profession.
              </p>
              <div className="w-full overflow-hidden shadow-lg border-2">
                <img
                  className="w-full hover:scale-105 transition-transform duration-300 ease-linear"
                  src={freeAppartment}
                  alt="freeAppartment"
                />
              </div>
            </div>
            <div className="border-l-[1px] hidden lg:block  absolute top-0 right-[50%] border-gray-200 rounded-tl-full  h-[40.5rem] w-[1px]"></div>
            <div className=" flex flex-col  items-center gap-6">
              <h1 className="text-rose-600 bg-rose-200 rounded-full px-8 tracking-wider font-semibold uppercase text-lg">
                Paid
              </h1>
              <p className="text-gray-500 leading-loose md:text-[1rem] text-sm  text-center italic">
                For those seeking tailored housing, we offer paid apartment
                options. Choose from a curated selection that aligns with your
                professional goals and personal preferences.
              </p>
              <div className="w-full overflow-hidden shadow-lg border-2">
                <img
                  className="w-full hover:scale-105 transition-transform duration-300 ease-linear"
                  src={paidAppartment}
                  alt="paid Appartment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
