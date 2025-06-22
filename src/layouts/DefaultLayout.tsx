import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => (
  <div className="animated-bg min-h-screen">
    <Outlet />
  </div>
);

export default DefaultLayout;
