import React from 'react';
import { Container, H2, Wrapper } from './Header.styled';
import { ThemeTogler } from './ThemeTogler';

export const Header = () => {

  return (
    <>
      <Container>
        <Wrapper>
          <H2>Calendar</H2>

          <div>
            <ThemeTogler/>
            <div>UserInfo</div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
