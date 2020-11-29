import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Panel, Spinner, WineCard } from '..';
import { getWines } from '../../api/functions';
import { useUser } from '../../providers/UserProvider';
import { ILike, IWine, IFavoriteWine } from '../../types';

const Wrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

export const WinePanel = () => {
  const [wines, setWines] = useState<IWine[]>([]);
  const [favoriteWines, setFavoriteWines] = useState<IFavoriteWine[]>([]);
  const { likes } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWine();
  }, []);

  useEffect(() => {
    if (wines.length) {
      combineData(wines, likes);
    }
  }, [wines, likes]);

  const fetchWine = async () => {
    setLoading(true);
    try {
      const { data } = await getWines();
      setWines(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const combineData = (wines: IWine[], likes: ILike[]) => {
    const copy: IFavoriteWine[] = [...wines];
    likes.forEach((like) => {
      const index = copy.findIndex((wine) => wine.id === like.id);
      if (index === -1) return;

      copy.splice(index, 1, {
        ...copy[index],
        isFavorite: true,
      });
    });

    const fixed = copy.map((wine) => ({
      ...wine,
      isFavorite: !!wine.isFavorite,
    }));

    setFavoriteWines(fixed);
  };

  return (
    <Panel title="Polecane wina">
      {loading && <Spinner />}
      <Wrapper>
        {favoriteWines.map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </Wrapper>
    </Panel>
  );
};
