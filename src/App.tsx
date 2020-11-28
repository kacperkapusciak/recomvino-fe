import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Layout, RecommendationsPanel, PeoplePanel, WinePanel, NavBar } from './components';
import { UserProvider } from './providers/UserProvider';

const App = () => (
  <UserProvider>
    <CssBaseline />
    <NavBar />
    <Layout>
      <PeoplePanel />
      <WinePanel />
      <RecommendationsPanel />
    </Layout>
  </UserProvider>
);

export default App;
