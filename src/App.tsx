// IGOB Solutions, Inc.
// Create by Joaquim Silva on 25/03/2022

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};

