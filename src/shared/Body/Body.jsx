import React from "react";
import topImg from "../../assets/image/bg-top.svg";
import bottomImg from "../../assets/image/bg-bottom.svg";
import shipImg from "../../assets/image/ship.png";
import planeImg from "../../assets/image/paper-plane.png";

const Body = ({ children }) => {
  return (
    <div className=" hero-bg h-screen w-screen">
      <div className=" flex justify-center ">
        <div className="mt-6 flex gap-x-16">
          <div className="w-[120px] h-[120px] bg-[#d9d9d9] bg-opacity-20 flex flex-col justify-center items-center">
            <img src={shipImg} alt="" className="w-14" />
            <p className="text-orange-900 font-bold text-base mt-4">
              Ocean Cargo
            </p>
          </div>
          <div className="w-[120px] h-[120px] bg-[#d9d9d9] bg-opacity-30 flex flex-col justify-center items-center">
            <img src={planeImg} alt="" className="w-14" />
            <p className="text-orange-900 font-bold text-base mt-4">
              Air Cargo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
