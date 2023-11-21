import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Spinner from "./components/Spinner";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./redux/jobSlice";
import db from "./jobs.json";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import SpecialtyJobs from "./pages/SpecialtyJobs";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import { logout } from "./redux/userSlice";
import LogoutModal from "./components/LogoutModal";
import Dashboard from "../admin/Dashboard";
function App() {
  const connected = useSelector((state) => state.user.connected);
  console.log(connected);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs(db));
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    setOpenModal(false);
  };

  return (
    <Spinner>
      {openModal && (
        <LogoutModal
          onClose={() => setOpenModal(false)}
          onLogout={handleLogout}
          isOpen={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Navbar setOpenModal={setOpenModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/jobs/:id" element={<JobDetails />} />
        <Route exact path="/jobs/:specialty/:id" element={<SpecialtyJobs />} />

        <Route
          path="/login"
          element={
            connected ? (
              <div className="grid  bg-no-repeat bg-cover bg-blend-multiply bg-black/80  h-screen bg-[url('/assets/jobsBG.jpg')]">
                <div className="grid place-content-center backdrop-blur-md h-full w-full ">
                  <h1 className=" text-gray-50 tracking-widest bg-black/50 px-16 py-6 rounded-sm text-xl uppercase ">
                    You are already logged in!
                  </h1>
                </div>
              </div>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            connected ? (
              <h1 className="grid place-content-center text-4xl h-[70vh]">
                You are already logged in!
              </h1>
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>

      <Footer />
    </Spinner>
  );
}

export default App;
