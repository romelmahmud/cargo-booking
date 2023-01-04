import React from "react";

import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <header className="bg-[#0D0B45]  text-white absolute top-0 left-0 w-screen z-10">
      <div className="flex justify-between items-center h-[60px]   max-w-[1440px] mx-auto px-4">
        <div className="logo flex items-center">
          <img src={logo} alt="" />
          <h2 className="font-medium text-3xl ml-4 ">RFQ TEAM</h2>
        </div>
        <nav className="nav flex items-center gap-x-5">
          <ul className="flex items-center gap-x-12 font-bold text-lg">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Policy</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
