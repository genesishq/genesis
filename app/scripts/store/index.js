/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { createStore } from 'redux'
import rootReducer from 'reducers'

/**
 * This is the redux store.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
   // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
