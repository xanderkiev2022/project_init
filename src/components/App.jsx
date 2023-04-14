import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { MainLayout } from './MainLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </>
  );
};
