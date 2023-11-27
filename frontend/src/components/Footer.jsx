import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-t max-w-full p-4 text-sm  from-zinc-200 shadow border-t-2 to-zinc-100  bottom-0 ">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 grid place-content-center">
          <img className="w-[10rem]" src="/assets/logo.png" alt="logo" />
        </div>
        <div className="flex col-span-3 w-full items-center justify-between lg:justify-evenly">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Contact
            </Link>
            <Link
              to="/services"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Services
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/jobs"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Jobs
            </Link>
            <Link
              to="/join"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Join
            </Link>
            <Link
              to="/testimonials"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Testimonials
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500 hover:text-gray-800">
              +216-54-645-625
            </span>
            <span className="text-gray-500 hover:text-gray-800">
              medical@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
