require('./todo/todo-app.scss');

/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';

/**
 * This is the application index file.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * @const app
 */
const todoApp = document.getElementById('todo-app');

/**
 * Initiate the react app with react-router.
 */
Router.run(routes, Router.HistoryLocation, render);

/**
 * Render the correct app with handler returned from react-router.
 *
 * @param {object} Handler
 *
 * @return void
 */
function render(Handler) {
  React.render(<Handler/>, todoApp);
}
