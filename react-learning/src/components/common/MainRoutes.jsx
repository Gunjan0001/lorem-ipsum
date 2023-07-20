import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Home";
import ReactLearning from "../ReactLearning";
import GsapTask from "../GsapTask";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<ReactLearning />}></Route>
        <Route
          path="/gsap
      "
          element={<GsapTask />}
        ></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
