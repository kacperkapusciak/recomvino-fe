import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';
import { Logo } from '..';
import { IPerson } from '../../types';
import { AccountCircleTwoTone } from '@material-ui/icons';

const Wrapper = styled(Paper)`
  height: 60px;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

interface NavBarProps {
  currentPerson: IPerson;
  setCurrentPerson: Dispatch<IPerson>;
}

export const NavBar = ({ currentPerson, setCurrentPerson }: NavBarProps) => {
  const { name } = currentPerson;

  const handleLogOut = () => {
    setCurrentPerson({ id: '', name: '' });
  };

  return (
    <Wrapper elevation={6}>
      <Logo />
      <Flex onClick={handleLogOut}>
        <AccountCircleTwoTone style={{ marginRight: 8 }} />
        <Typography variant="h6" component="p">
          {currentPerson.id ? name : 'Log in'}
        </Typography>
      </Flex>
    </Wrapper>
  );
};
