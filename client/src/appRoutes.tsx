/** @format */

import { Routes, Route, Navigate } from 'react-router-dom';

import LayoutPage from './layouts/layout';
import HomePage from './components/pages/homePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutPage>
            <HomePage />
          </LayoutPage>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
