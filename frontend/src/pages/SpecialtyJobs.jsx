import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJob, searchJobBySpecialty } from "../redux/jobSlice";
import loop from "/assets/search.svg";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

function SpecialtyJobs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const jobs = useSelector((state) => state.medical.specialtyJobs);
  console.log(jobs);
  const specialtyExist = jobs[0]?.specialty;
  const specialtyBackground = useSelector(
    (state) => state.medical.specialtyBackground
  );
  const background = { backgroundImage: `url('${specialtyBackground}')` };
  // console.log(background);
  const specialty = useSelector((state) => state.medical.specialty);
  const filterJobs = useSelector((state) => state.medical.searchSpecialty);

  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);
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
      dispatch(searchJobBySpecialty(item));
    }
  };
  //   bg-[url('https://img.freepik.com/free-photo/side-view-doctor-holding-stethoscope_23-2149994395.jpg?w=1380&t=st=1697457692~exp=1697458292~hmac=883a2c699e6218f08ca86643d0e88d92065bb81570ae552de89d0ccaf3cbacbd')]
  return (
    <div className="">
      <section
        style={background}
        className=" grid place-content-center bg-blend-overlay bg-blue-950/30  bg-no-repeat bg-center  md:bg-center  bg-cover h-[50vh] ">
        <h1 className="md:text-8xl text-7xl text-white uppercase font-bold">
          Jobs
        </h1>
        <h2 className="text-blue-950 bg-white text-md font-bold uppercase text-center ">
          Find Your Dream Job!
        </h2>
        <h2 className="text-cyan-950 bg-cyan-300 w-fit mx-auto px-4  mt-3 py-1 rounded-full text-xs tracking-widest font-semibold uppercase text-center">
          {specialty}
        </h2>
      </section>
      <section>
        {/* SEARCH */}
        {specialtyExist && (
          <section className="border-[1px] shadow p-6 sticky top-20 z-10  bg-white/95">
            <div className="flex items-center  justify-between px-16">
              {/* PAGINATION */}
              <Pagination
                totalPosts={jobs.length}
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
        )}

        {/* JOBS */}
        <div className="w-8/12 mx-auto py-8 z-0">
          {search
            ? filterJobs.map((job) => (
                <div
                  className="relative md:flex shadow-lg hover:scale-105 transition-all bg-cyan-950/10 duration-300 ease-linear bg-[url('/assets/oneJobBG.jpg')] bg-no-repeat bg-cover bg-blend-overlay  border-2 gap-8 my-4 rounded px-8 md:px-20 py-8  md:justify-between md:items-center"
                  key={job.id}>
                  <section className="flex flex-col gap-1">
                    <div className=" flex flex-col items-start justify-start gap-1">
                      <span className="text-gray-400 text-lg font-semibold">
                        Job Title
                      </span>
                      <span className="uppercase text-cyan-700 md:text-4xl text-3xl">
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
                      className=" bg-transparent  uppercase transition-colors duration-500 ease-linear md:px-8 px-4 hover:bg-black border-cyan-800 border-2 text-black md:py-3 py-2 text-sm  hover:text-white  rounded ">
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
                <div
                  className="relative md:flex shadow-lg hover:scale-105 transition-all duration-300 ease-linear bg-no-repeat bg-cover bg-[url('/assets/oneJobBG.jpg')] border-2 gap-8 my-4 rounded px-8 md:px-20 py-8  md:justify-between md:items-center"
                  key={job.id}>
                  <section className="flex flex-col gap-1 ">
                    <div className=" flex flex-col items-start justify-start gap-1">
                      <span className="text-gray-400 text-lg font-semibold">
                        Job Title
                      </span>
                      <span className="uppercase text-cyan-700 md:text-4xl text-3xl">
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
                </div>
              ))}
        </div>
        {/* NO JOB FOUND */}
        <div>
          {search & (filterJobs.length === 0) ? (
            <h1 className="text-center text-gray-600"> No Such Job Found..</h1>
          ) : null}
        </div>
        <div className="mb-10">
          {jobs.length === 0 ? (
            <h1 className="text-center bg-gray-200 p-4 text-gray-600">
              {" "}
              No Offers Yet For {specialty} ..
            </h1>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default SpecialtyJobs;
