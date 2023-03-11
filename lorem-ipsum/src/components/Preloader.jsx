import React from "react";
import circle from "../assets/images/png/circle.png";
const preloader = () => {
  return (
    <>
      <div className="min-vh-100 bg-black loding_position">
        <img
          className="w_xsm_50 w_sm_13 animation_loding"
          src={circle}
          alt="circle"
        />
      </div>
    </>
  );
};

export default preloader;
