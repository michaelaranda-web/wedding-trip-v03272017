import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app.jsx';
import { Home } from './home.jsx';
import { Adventures } from './adventures.jsx';
import { Story } from './story.jsx';
import { Japan } from './japan.jsx';
import { Taiwan } from './taiwan.jsx';
import { Hawaii } from './hawaii.jsx';
import { NotFound } from './notFound.jsx';

export default (
  <Route path='/' component={App}>
    <Route path='japan' component={Japan} />
    <Route path='taiwan' component={Taiwan} />
    <Route path='hawaii' component={Hawaii} />
    <Route path='adventures' component={Adventures} />
    <Route path='story' component={Story} />
  	<Route path='*' component={NotFound} />
    <IndexRoute component={Home} />
  </Route>
);