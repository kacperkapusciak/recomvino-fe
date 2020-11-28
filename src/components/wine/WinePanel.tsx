import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Panel, Spinner, WineCard } from '..';
import { getWines } from '../../api/functions';
import { IWine } from '../../types';

const Wrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

export const WinePanel = () => {
  const [wines, setWines] = useState<IWine[]>([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchWine();
  }, []);

  return (
    <Panel title="Polecane wina">
      {loading && <Spinner />}
      <Wrapper>
        {wines.map((wine: IWine) => (
          <WineCard key={wine.id} wine={wine} onLike={() => {}} />
        ))}
      </Wrapper>
    </Panel>
  );
};
