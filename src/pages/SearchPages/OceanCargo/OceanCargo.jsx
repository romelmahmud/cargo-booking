import React from "react";
import Ship from "../../../assets/image/ship.png";
import SearchForm from "../components/SearchForm/SearchForm";

const OceanCargo = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="m-14 flex items-center">
        <img src={Ship} alt="" className="w-[72px] mr-5" />
        <p className="font-bold text-[25px]">Ocean Cargo</p>
      </div>
      <SearchForm />
      <SearchForm />
    </div>
  );
};

export default OceanCargo;
