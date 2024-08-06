import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
