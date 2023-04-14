import React from 'react';
import { Container, H2, Button } from './SideBar.styled';

export const SideBar = () => {
  return (
    <Container>
      <div>
        <H2>GooseTrack</H2>
        <h2>User Panel</h2>
        <ul>
          <li>My account</li>
          <li>Calendar</li>
        </ul>
      </div>

      <Button>Log out</Button>
    </Container>
  );
};
