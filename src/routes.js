import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="api/location/:woeId"
        component={({ match }) => <LocationPage woeId={match.params.woeId} />}
      />
    </Switch>
  </HashRouter>
);
