import React from "react";
import { Outlet } from "react-router-dom";
import Body from "../../shared/Body/Body";
import Header from "../../shared/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </>
  );
};

export default Main;
