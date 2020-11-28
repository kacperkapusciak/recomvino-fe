import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import { FavoriteTwoTone } from '@material-ui/icons';

import { IWine } from '../../types';
import { Detail, Price } from '..';

interface FlexProps {
  spaced?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ spaced }) => (spaced ? 'space-between' : 'unset')};
`;

interface WineCardProps {
  wine: IWine;
  onLike: () => void;
}

export const WineCard = ({ wine, onLike }: WineCardProps): ReactElement => {
  const { name, brand, flavor, price } = wine;
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardContent style={{ padding: 16 }}>
        <Typography variant="h5" component="p" gutterBottom>
          {name}
        </Typography>
        <Flex>
          <Detail label="gatunek" body={brand} />
          <Detail label="smak" body={flavor} />
        </Flex>
        <Flex spaced>
          <Price>{price}</Price>
          <IconButton aria-label="add-to-favorites">
            <FavoriteTwoTone />
          </IconButton>
        </Flex>
      </CardContent>
    </Card>
  );
};
