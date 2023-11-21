import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import LogoutModal from "../components/LogoutModal";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

function Home() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
      
    </div>
  );
}

export default Home;
