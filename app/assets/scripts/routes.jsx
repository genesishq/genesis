/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

import {
  Route,
  DefaultRoute,
  NotFoundRoute
} from 'react-router';

import App from './app.jsx';
import TodoApp from './components/todo-app.jsx';
import NotFound from './not-found.jsx';

/**
 * This is the application routes.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * @const routes
 */
const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={TodoApp} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
