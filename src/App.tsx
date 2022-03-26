// IGOB Solutions, Inc.
// Create by Joaquim Silva on 25/03/2022

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';


export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

