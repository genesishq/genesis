/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import todos from './todos'

/**
 * This is the root reducer. It returns a combined reducer from other reducers.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const rootReducer = combineReducers({
  todos,
  routing: routeReducer
})

export default rootReducer
