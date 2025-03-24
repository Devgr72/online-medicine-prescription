import React from "react";
import HomeC1 from "./Homec1";
import HomeC2 from "./Homec2";
import HomeC3 from "./Homec3";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
    <Navbar />
      <HomeC1 />
      <HomeC2 />
      <HomeC3 />
    </div>
  );
};

export default Home;
