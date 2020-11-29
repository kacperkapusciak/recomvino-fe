import { Typography } from '@material-ui/core';
import React from 'react';
import { Panel, Recommendation, Spinner } from '..';
import { useUser } from '../../providers/UserProvider';

export const RecommendationsPanel = () => {
  const { user, recommendations, recLoading } = useUser();
  return (
    <Panel title="Wybrane dla Ciebie">
      {recLoading && <Spinner />}
      {recommendations.length ? (
        recommendations.map(({ id, recommendation }) => (
          <Recommendation key={`recommend-${id}`} id={id} name={recommendation} />
        ))
      ) : (
        <Typography variant="body1" component="p">
          {user.id
            ? 'Dodaj wina do ulubionych, aby otrzymać spersonalizowane rekomendacje.'
            : 'Zaloguj się, aby otrzymać spersonalizowane rekomendacje.'}
        </Typography>
      )}
    </Panel>
  );
};
