import React, { useEffect, useState } from "react";
import back_to_top from "../assets/images/png/back to top.jpg";
const Backtotop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {backToTop && (
        <div>
          <button
            id="btn"
            onClick={() => top()}
            className=" position-fixed z_index  mb-4 bottom-0 end-0 border-0 bg-transparent me-2"
          >
            <img className="w_50" src={back_to_top} />
          </button>
        </div>
      )}
    </>
  );
};

export default Backtotop;
