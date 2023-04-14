import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './MainLayout.styled';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </Container>
  );
};
