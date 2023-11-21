import { useDispatch, useSelector } from "react-redux";
import check from "/assets/check-blue.svg";
import contract from "/assets/contractIMG.jpg";
import { useNavigate } from "react-router-dom";
import { getJob } from "../redux/jobSlice";
import { useEffect } from "react";
import { motion } from "framer-motion";

function JobDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const job = useSelector((state) => state.medical.selectJob);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToApply = (job) => {
    dispatch(getJob(job));
    navigate(`/apply/${job.id}`);
  };
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="h-[50vh] bg-no-repeat bg-cover flex items-center pl-20 md:pl-48 md:bg-top bg-center  bg-[url('/assets/jobsDetailsBG.jpg')]">
        <section className="flex flex-col  justify-start gap-4">
          <div className=" flex flex-col items-start justify-start gap-1">
            <span className="text-gray-500 uppercase text-sm font-semibold">
              Job Title
            </span>
            <span
              initial={{ x: "+300vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "linear" }}
              className="uppercase text-cyan-500 md:text-5xl text-3xl">
              {job.title}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray-600 text-lg">Location:</span>
            <span className="text-black text-2xl md:text-xl">
              {job.location}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray-600 text-lg">Salary:</span>
            <span className="text-black md:text-2xl">{job.salary}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray-600 text-lg">Specialty:</span>
            <span className="text-rose-600 md:text-xl font-semibold ">
              {job.specialty}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray-600 text-lg">Position:</span>
            <span className="text-black md:text-xl">{job.position}</span>
          </div>
        </section>
      </motion.div>
      <section className=" md:py-24 ">
        <div className="box-shadow-apply h-full bg-white md:w-[88%] mx-auto  ">
          <div className="sm:flex items-center justify-between overflow-hidden w-full h-full">
            <div className="flex flex-col lg:items-start items-center gap-8  md:w-1/2 md:p-0  p-16  md:pl-20">
              <div className="flex flex-col lg:items-start items-center justify- gap-4">
                <motion.h1
                  initial={{ x: "-200vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="md:text-4xl text-3xl text-cyan-800">
                  Job Description
                </motion.h1>
                <p className="max-w-md text-center lg:text-left">
                  {job.description}
                </p>
                <p className=" text-center lg:text-left leading-loose max-w-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  optio minus, ab dolore voluptate iure recusandae nisi cum
                  explicabo placeat quos dolores rem obcaecati. Ipsa est
                  sapiente molestiae sit odio?
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 justify-start">
                  <section className="gap-2 flex flex-col">
                    <span className="md:text-xl text-cyan-700">
                      Requirements
                    </span>
                    {job?.requirements?.map((req, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 justify-start  ">
                        <img className="w-[1.5rem]" src={check} alt="check" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </section>
                  <section className="gap-2 flex flex-col">
                    <span className="md:text-xl text-cyan-700">
                      Responsabilities
                    </span>

                    {job?.responsibilities?.map((resp, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 justify-start">
                        <img className="w-[1.5rem]" src={check} alt="check" />
                        <span className="text-sm text-gray-700">{resp}</span>
                      </div>
                    ))}
                  </section>
                  <section className="gap-2 flex flex-col ">
                    <span className="md:text-xl text-cyan-700">Benefits</span>

                    {job?.benefits?.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-2 ">
                        <img className="w-[1.5rem]" src={check} alt="check" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </section>
                  <button
                    onClick={() => goToApply(job)}
                    className="bg-cyan-600  text-white hover:bg-cyan-800 rounded-sm transition-colors duration-300 ease-linear py-2 text-md  w-full ">
                    Apply Online
                  </button>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="lg:w-1/2 hidden lg:block h-full ">
              <img
                className=" h-full w-full object-cover"
                src={contract}
                alt="contract"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobDetails;
