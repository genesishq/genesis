/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import history from './history'

import TodoApp from 'Components/TodoApp/TodoApp'

/**
 * This is the application index file.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * @const container
 */
const root = document.getElementById('root')

/**
 * Render the app with react-router.
 */
render((
  <Router history={history}>
    <Route path='/' component={TodoApp} />
  </Router>
), root)
