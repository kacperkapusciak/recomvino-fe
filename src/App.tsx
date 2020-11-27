import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Layout, RecommendationsPanel, PeoplePanel, WinePanel } from './components';
import { IPerson } from './types';

const App = () => {
  const [currentPerson, setCurrentPerson] = useState<IPerson>({ id: '', name: '' });
  return (
    <>
      <CssBaseline />
      <Layout>
        <PeoplePanel currentPerson={currentPerson} setCurrentPerson={setCurrentPerson} />
        <WinePanel />
        <RecommendationsPanel />
      </Layout>
    </>
  );
};

export default App;
