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
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'

import rootReducer from 'reducers'

import TodoApp from 'components/TodoApp/TodoApp'

/**
 * This is the application index file.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * Get dom element which is going to be used as container for the react app.
 */
const root = document.getElementById('root')

/**
 * Create redux store.
 */
const store = createStore(rootReducer)

if (module.hot) {
 // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers')
    store.replaceReducer(nextReducer)
  })
}

/**
 * Sync react router and redux state.
 */
syncReduxAndRouter(browserHistory, store)

/**
 * Render the app with react-router.
 */
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={TodoApp} />
    </Router>
  </Provider>
), root)
