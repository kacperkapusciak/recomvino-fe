import React from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';
import { Logo } from '..';
import { AccountCircleTwoTone } from '@material-ui/icons';
import { useUser } from '../../providers/UserProvider';

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

export const NavBar = () => {
  const { user, setUser } = useUser();

  const handleLogOut = () => {
    setUser({ id: '', name: '' });
  };

  return (
    <Wrapper elevation={6}>
      <Logo />
      <Flex onClick={handleLogOut}>
        <AccountCircleTwoTone style={{ marginRight: 8 }} />
        <Typography variant="h6" component="p">
          {user.id ? user.name : 'Niezalogowano'}
        </Typography>
      </Flex>
    </Wrapper>
  );
};
