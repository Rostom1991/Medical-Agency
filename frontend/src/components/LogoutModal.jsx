import React from "react";

function LogoutModal({ isOpen, onClose, onLogout, setOpenModal }) {
  //   console.log(first)
  return (
    <div
      onClick={onClose}
      className="w-full h-full fixed backdrop-blur-sm top-0 z-40 bg-black/75  grid place-content-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-gray-200 rounded-sm z-50 box-shadow-apply shadow-gray-50 w-[40vw] py-10 mx-auto flex flex-col items-center justify-center gap-6">
        <span className="uppercase text-sm text-gray-700 tracking-widest">
          Do you really want to logout?
        </span>
        <div className="flex items-center gap-4 justify-center">
          <button
            onClick={onLogout}
            className="bg-cyan-600 text-sm uppercase hover:bg-cyan-800 transition-colors duration-300 ease-linear text-white tracking-wider py-2 px-6">
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-rose-600 text-sm uppercase hover:bg-rose-800 transition-colors duration-300 ease-linear border-white  text-white  py-2 tracking-wider px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
