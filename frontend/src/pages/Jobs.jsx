import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJob, searchJob } from "../redux/jobSlice";
import loop from "/assets/search.svg";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

function Jobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allJobs = useSelector((state) => state.medical.jobs);
  const filterJobs = useSelector((state) => state.medical.search);

  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = allJobs.slice(firstPostIndex, lastPostIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetails = (job) => {
    dispatch(getJob(job));
    navigate(`/jobs/${job.id}`);
  };

  const goToApply = (job) => {
    dispatch(getJob(job));
    navigate(`/apply/${job.id}`);
  };
  const searchQuery = (item) => {
    if (item.length === 0) {
      setSearch(false);
    } else {
      setSearch(true);
      dispatch(searchJob(item));
    }
  };

  return (
    <div>
      <section className=" grid place-content-center  bg-blend-overlay bg-blue-500/30 bg-[url('/assets/jobsBG.jpg')] bg-no-repeat bg-right  md:bg-top  bg-cover h-[50vh] ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          className="md:text-8xl text-7xl text-white uppercase font-bold">
          Jobs
        </motion.h1>
        <motion.h2
          initial={{ y: "+500vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="text-cyan-950 text-md font-bold uppercase text-center">
          Find Your Dream Job!
        </motion.h2>
      </section>
      <section>
        {/* SEARCH */}
        <section className="border-[1px] shadow p-6 sticky top-20 z-10  bg-white/95">
          <div className="flex items-center  justify-between px-16">
            {/* PAGINATION */}
            <Pagination
              totalPosts={allJobs.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <div className=" relative sm:w-[25%] flex gap-1 items-center justify-center ">
              <input
                className=" w-10/12 p-1 border-[2px] placeholder:text-gray-600 pl-2 border-gray-300 text-gray-800 text-sm rounded outline-none focus:border-gray-400 caret-slate-500 focus:shadow"
                type="text"
                placeholder="Search Jobs.."
                onChange={(e) => searchQuery(e.target.value)}
              />
              <img
                className=" w-[1.4rem] right-2 top-2"
                src={loop}
                alt="loop"
              />
            </div>
          </div>
        </section>
        {/* JOBS */}
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 place-items-center gap-0 py-8 z-0">
          {search
            ? filterJobs.map((job) => (
                <div
                  className="relative w-[90%] md:flex shadow-lg hover:scale-105 transition-all duration-500 ease-linear  bg-no-repeat bg-cover bg-blend-overlay bg-[url('/assets/oneJobBG.jpg')] border-2 gap-8 my-4 rounded px-8 md:px-10 bg-blue-950/10 py-8  md:justify-between md:items-center"
                  key={job.id}>
                  <section className="flex flex-col gap-1">
                    <div className=" flex flex-col items-start justify-start gap-1">
                      <span className="text-gray-400 text-lg font-semibold">
                        Job Title
                      </span>
                      <span className="uppercase text-cyan-700 md:text-3xl text-2xl">
                        {job.title}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Location:</span>
                      <span className="text-blue-950 text-lg md:text-xl">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Salary:</span>
                      <span className="text-blue-950 md:text-lg">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Specialty:</span>
                      <span className="text-cyan-500 md:text-md font-semibold ">
                        {job.specialty}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Position:</span>
                      <span className="text-blue-950 md:text-lg">
                        {job.position}
                      </span>
                    </div>
                  </section>
                  {/* BUTTONS */}
                  <div className="flex mt-6 w-3/4 mx-auto md:mx-0 md:w-auto md:mt-0 flex-col md:gap-4 gap-2">
                    <button
                      onClick={() => goToDetails(job)}
                      className="bg-transparent uppercase transition-colors duration-500 ease-linear md:px-8 px-4 hover:bg-black border-violet-950 border-2 text-black md:py-3 py-2 text-sm  hover:text-white  rounded ">
                      Details
                    </button>
                    <button
                      onClick={() => goToApply(job)}
                      className="bg-cyan-700 hover:shadow-lg hover:bg-cyan-600 md:py-3 py-2 md:px-8 px-4 transition-colors duration-500 ease-linear   text-white  rounded ">
                      Apply For This Job
                    </button>
                  </div>
                </div>
              ))
            : currentPosts.map((job) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="relative w-[90%] md:flex shadow-lg hover:scale-105 transition-all duration-300 ease-linear bg-no-repeat bg-cover bg-blend-overlay bg-[url('/assets/oneJobBG.jpg')] border-2 gap-8 my-4 rounded px-8 md:pl-10 md:px-10 py-8  md:justify-between md:items-center"
                  key={job.id}>
                  <section className="flex flex-col gap-1 ">
                    <div className=" flex flex-col items-start justify-start gap-1">
                      <span className="text-gray-400 text-lg font-semibold">
                        Job Title
                      </span>
                      <span className="uppercase text-cyan-700 md:text-3xl text-2xl">
                        {job.title}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Location:</span>
                      <span className="text-blue-950 text-lg md:text-xl">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Salary:</span>
                      <span className="text-blue-950 md:text-lg">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Specialty:</span>
                      <span className="text-cyan-500 md:text-md font-semibold ">
                        {job.specialty}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-800 text-md">Position:</span>
                      <span className="text-blue-950 md:text-lg">
                        {job.position}
                      </span>
                    </div>
                  </section>

                  <div className="flex mt-6 w-3/4 mx-auto md:mx-0 md:w-auto md:mt-0 flex-col md:gap-4 gap-2">
                    <button
                      onClick={() => goToDetails(job)}
                      className="bg-transparent uppercase transition-colors duration-500 ease-linear md:px-8 px-4 hover:bg-cyan-950 border-cyan-950 border-2 text-cyan-950 md:py-3 py-2 text-sm  hover:text-white  rounded ">
                      Details
                    </button>
                    <button
                      onClick={() => goToApply(job)}
                      className="bg-cyan-700 hover:shadow-lg hover:bg-cyan-600 md:py-3 py-2 md:px-8 px-4 transition-colors duration-500 ease-linear   text-white  rounded ">
                      Apply For This Job
                    </button>
                  </div>
                </motion.div>
              ))}
        </div>
        {/* NO JOB FOUND */}
        <div>
          {search & (filterJobs.length === 0) ? (
            <h1 className="text-center text-gray-600"> No Such Job Found..</h1>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default Jobs;
