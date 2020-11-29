import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, IconButton, Tooltip, Typography } from '@material-ui/core';
import { FavoriteTwoTone } from '@material-ui/icons';
import { red, grey } from '@material-ui/core/colors';

import { IFavoriteWine } from '../../types';
import { Detail, Price } from '..';
import { useUser } from '../../providers/UserProvider';
import { addLike, removeLike } from '../../api';

interface FlexProps {
  spaced?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ spaced }) => (spaced ? 'space-between' : 'unset')};
`;

interface WineCardProps {
  wine: IFavoriteWine;
}

export const WineCard = ({ wine }: WineCardProps): ReactElement => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const { id, name, brand, flavor, price, isFavorite } = wine;
  const { user, refetchLikes } = useUser();

  const handleTooltipOpen = () => setTooltipOpen(true);
  const handleTooltipClose = () => setTooltipOpen(false);

  const handleLike = () => {
    // roundtip to USA and back takes some time...
    if (isFavorite) {
      removeFromFavorites(user.id, id);
    } else {
      addToFavorites(user.id, id);
    }
  };

  const addToFavorites = async (personId: string, wineId: string) => {
    try {
      await addLike({ personId, wineId });
      await refetchLikes();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavorites = async (personId: string, wineId: string) => {
    try {
      await removeLike({ personId, wineId });
      await refetchLikes();
    } catch (error) {
      console.error(error);
    }
  };

  const favouriteButton = (
    <div>
      <IconButton aria-label="add-to-favorites" onClick={handleLike} disabled={!user.id}>
        <FavoriteTwoTone style={{ color: isFavorite ? red[500] : grey[500] }} />
      </IconButton>
    </div>
  );

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
          {!user.id ? (
            <Tooltip
              arrow
              open={tooltipOpen}
              onClose={handleTooltipClose}
              onOpen={handleTooltipOpen}
              title="Zaloguj się, by móc dodawać wina do ulubionych"
            >
              {favouriteButton}
            </Tooltip>
          ) : (
            favouriteButton
          )}
        </Flex>
      </CardContent>
    </Card>
  );
};
