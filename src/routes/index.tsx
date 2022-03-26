// IGOB Solutions, Inc.
// Create by Joaquim Silva on 25/03/2022

import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary'>Taste</Button>} />
      
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}