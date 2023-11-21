/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import spinner from "/assets/bubble-loading.svg";
function Spinner({ children }) {
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 2000);
  }, []);

  return (
    <div>
      {spin ? (
        <div className="h-screen grid place-content-center">
          <img className="w-1/3 mx-auto" src={spinner} alt="spinner" />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}

export default Spinner;
