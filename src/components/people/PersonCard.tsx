import React, { Dispatch, ReactElement } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { AccountCircleTwoTone } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import { IPerson } from '../../types';
import { useUser } from '../../providers/UserProvider';

const CardStyled = styled(Card)`
  margin-bottom: 8px;
`;
const CardContentStyled = styled(CardContent)`
  display: flex;
  align-items: center;
`;

interface PersonCardProps {
  person: IPerson;
}

export const PersonCard = ({ person }: PersonCardProps): ReactElement => {
  const { name } = person;
  const { user, setUser } = useUser();

  const handleUserChange = () => {
    setUser(person);
  };

  const isLoggedIn = person === user;
  return (
    <CardStyled elevation={isLoggedIn ? 4 : 1}>
      <CardActionArea onClick={handleUserChange}>
        <CardContentStyled>
          <AccountCircleTwoTone style={{ marginRight: 16, color: isLoggedIn ? green[600] : 'inherit' }} />
          <Typography variant="h5" component="p">
            {name}
          </Typography>
        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  );
};
