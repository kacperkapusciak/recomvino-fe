import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  color: #722f37;
`;

const Base = styled.span`
  font-size: 36px;
`;

const Rest = styled.span`
  font-size: 20px;
`;

interface PriceProps {
  children: number;
}

export const Price = ({ children }: PriceProps): ReactElement => {
  const [base, rest] = children.toString().split('.');
  return (
    <Wrapper>
      <Base>{base}</Base>
      <Rest>{rest}</Rest>
      <Base>,-</Base>
    </Wrapper>
  );
};
