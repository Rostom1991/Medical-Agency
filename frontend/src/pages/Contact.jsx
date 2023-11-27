import arrow from "/assets/arroww.svg";
import email from "/assets/email-alt.svg";
import phone from "/assets/gsm.svg";
import location from "/assets/location-outline.svg";
import contactAvatar from "/assets/contactAvatar.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://medical-agency-api.vercel.app/contact", formData)
      .then((response) => {
        setError(false);
        setSuccess(response.data.message);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data.error);
      });
  };
  return (
    <div className="">
      <section
        className="bg-cover flex flex-col items-start justify-center md:pl-40 pl-16 gap-2  bg-blend-overlay bg-black/30 md:bg-center  bg-[-30rem]  bg-no-repeat
       bg-[url('/assets/contactMedicalBG.jpg')] h-[40vh] md:h-[60vh] w-full">
        <motion.h1
          initial={{ x: "+100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="text-white font-semibold text-5xl md:text-7xl ">
          Contact
        </motion.h1>
        <motion.div
          initial={{ x: "+100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="flex items-center gap-2">
          <img className="w-[1.2rem] rotate-90" src={arrow} alt="arrow" />
          <h1 className=" uppercase font-semibold text-sm  text-cyan-300 ">
            Connect With Us
          </h1>
        </motion.div>
      </section>
      <section className="grid md:grid-cols-2 place-content-center lg:w-10/12 w-full  m-auto py-12">
        <div className="grid gap-8 pt-12 pb-8 md:px-16 px-8 bg-white  shadow-xl w-full mt-0 mx-auto border-2 border-gray-100 rounded ">
          <motion.h1
            initial={{ y: "-200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
            className="text-cyan-800  uppercase font-semibold text-3xl text-center">
            Let's Get In Touch!
          </motion.h1>
          <form
            onSubmit={handleSubmit}
            className="py-4 flex flex-col items-center justify-center gap-12 relative">
            <div className="flex flex-col gap-4 w-full ">
              <div className="flex flex-col gap-1">
                <label
                  className="uppercase text-xs text-cyan-800"
                  htmlFor="name">
                  Full Name:
                </label>
                <input
                  className="outline-none bg-purple-100 focus:shadow-lg p-2 text-xs border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400 pl-2 text-gray-500 w-full"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.value}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="uppercase text-xs text-cyan-800"
                  htmlFor="email">
                  Email:
                </label>
                <input
                  className="text-xs p-2 outline-none bg-purple-100 focus:shadow-lg pl-2 border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400  text-gray-500 w-full"
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  value={formData.value}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="uppercase text-xs text-cyan-800"
                  htmlFor="text">
                  Phone:
                </label>
                <input
                  className="outline-none bg-purple-100 focus:shadow-lg p-2 text-xs border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400 pl-2 text-gray-500 w-full"
                  type="text"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.value}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="uppercase text-xs text-cyan-800"
                  htmlFor="text">
                  Message:
                </label>
                <textarea
                  rows={15}
                  className="text-xs p-2 outline-none bg-purple-100 focus:shadow-lg pl-2 border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400  text-gray-500 w-full"
                  type="text"
                  placeholder="Your Message"
                  name="message"
                  value={formData.value}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="lg:flex lg:flex-row flex flex-col lg:mr-auto gap-4 lg:gap-8 items-center">
              <button className="bg-cyan-50 uppercase text-sm border-[1.7px] border-cyan-700 hover:bg-cyan-800 hover:text-white transition-colors duration-500 ease-linear rounded-full px-10 py-2 text-cyan-800">
                Send Message
              </button>
              {error && (
                <span className="text-white bg-red-600 rounded-sm text-sm px-6 py-1">
                  {error}
                </span>
              )}
              {success && (
                <span className="text-white bg-cyan-600  text-sm px-6 py-2">
                  {success}
                </span>
              )}
            </div>
          </form>
        </div>
        <div className="relative md:w-11/12 mx-auto w-full  flex flex-col border-2 rounded border-gray-100 shadow-xl justify-start items-center gap-10 sm:my-0  my-8 pt-12 ">
          <h1 className="text-xl  text-cyan-800 font-semibold uppercase underline underline-offset-8 decoration-slate-300 decoration-[1px]">
            Contact Information
          </h1>
          <section className="flex items-center lg:gap-20 gap-8 justify-between px-12 sm:px-0 p-3">
            <div className="flex flex-col items-start justify-center gap-6  p-2">
              <div className="flex  items-center gap-1">
                <img className="w-[1.5rem]" src={location} alt="phone" />
                <span className="text-gray-700 text-sm">
                  Montplaisir, Tunis, Tunisia
                </span>
              </div>
              <div className="flex ml-1 items-center gap-1">
                <img className="w-[1.5rem]" src={phone} alt="phone" />
                <span className="text-gray-700 text-sm">+216-546456-25</span>
              </div>
              <div className="flex ml-1 items-center gap-2">
                <img className="w-[1.5rem]" src={email} alt="email" />
                <span className="text-gray-700 text-sm">medical@gmail.com</span>
              </div>
            </div>
            <div className="rounded-full w-[7rem] h-[7rem] lg:w-[9rem] shadow lg:h-[9rem] ">
              <img
                className="rounded-full w-full h-full object-cover"
                src={contactAvatar}
                alt="contact us"
              />
            </div>
          </section>
          <div className=" md:absolute bottom-0  w-full">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12776.821780284476!2d10.167651969723849!3d36.813596589888796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd348a1d86d3bb%3A0x9d8b5f984edebc84!2sMontplaisir%2C%20Tunis!5e0!3m2!1sen!2stn!4v1697569686742!5m2!1sen!2stn"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
