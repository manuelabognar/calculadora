import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import NotFound from './pages/notFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ Main } />
      <Route  component={ NotFound } />
    </Switch>  
  </BrowserRouter>
)

export default Routes