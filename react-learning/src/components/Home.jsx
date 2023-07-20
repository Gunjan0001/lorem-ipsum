import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-red-600 flex items-center">
      <div className="flex justify-center items-center flex-1 gap-4">
        <Link aria-label="btn" to="/form">
          <button className="text-white rounded border border-white p-2 bg-black">
            Formpage
          </button>
        </Link>{" "}
        <Link aria-label="btn" to="/gsap">
          <button className="text-white rounded border border-white p-2 bg-black">
            Gsappage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
