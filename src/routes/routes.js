import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/Error/Error";
import AirCargo from "../pages/SearchPages/AirCargo/AirCargo";
import AirCargoResult from "../pages/SearchPages/AirCargoResult/AirCargoResult";
import OceanCargo from "../pages/SearchPages/OceanCargo/OceanCargo";
import OceanCargoResult from "../pages/SearchPages/OceanCargoResult/OceanCargoResult";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <OceanCargo />,
      },
      {
        path: "/searchpages/oceancargo",
        element: <OceanCargo />,
      },
      {
        path: "/searchpages/oceancargoresult",
        element: <OceanCargoResult />,
      },

      {
        path: "/searchpages/aircargo",
        element: <AirCargo />,
      },
      {
        path: "/searchpages/aircargoresult",
        element: <AirCargoResult />,
      },
    ],
  },
]);
