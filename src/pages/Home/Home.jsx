import React from "react";
import Ship from "../../assets/image/ship.png";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="m-14 flex items-center">
        <img src={Ship} alt="" className="w-[72px]"/>
        <p className="font-bold text-3">Ocean Cargo</p>
      </div>
    </div>
  );
};

export default Home;
