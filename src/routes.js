import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProfileSearch from './pages/ProfileSearch/index';
import ProfileInfo from './pages/ProfileInfo/index';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={ProfileSearch}/>
            <Route path='/profileInfo' component={ProfileInfo}/>
        </Switch>
    </BrowserRouter>
  );
}
