// IGOB Solutions, Inc.
// Create by Joaquim Silva on 25/03/2022

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

