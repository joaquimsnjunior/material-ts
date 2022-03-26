// IGOB Solutions, Inc.
// Create by Joaquim Silva on 25/03/2022

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes"; 

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

