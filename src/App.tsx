import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Layout, RecommendationsPanel, PeoplePanel, WinePanel, NavBar } from './components';
import { IPerson } from './types';

const App = () => {
  const [currentPerson, setCurrentPerson] = useState<IPerson>({ id: '', name: '' });
  return (
    <>
      <CssBaseline />
      <NavBar currentPerson={currentPerson} setCurrentPerson={setCurrentPerson} />
      <Layout>
        <PeoplePanel currentPerson={currentPerson} setCurrentPerson={setCurrentPerson} />
        <WinePanel />
        <RecommendationsPanel />
      </Layout>
    </>
  );
};

export default App;
