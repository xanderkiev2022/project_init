import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 289px;
  background-color: var(--var-secondary-bg-color);
  border-right: 1px solid #dce3e580;
  padding: 24px;
  padding-top: 32px;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Button = styled.button`
  width: 141px;
  height: 56px;
  margin-top: auto;
  background: #3E85F3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: white;
`;