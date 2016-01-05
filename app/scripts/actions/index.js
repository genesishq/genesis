/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import dispatcher from '../dispatcher'
import * as constants from '../constants'

/**
 * These are the action methods.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * Create new todo.
 *
 * @param {string} text
 *
 * @return {void}
 */
export function create (text) {
  dispatcher.dispatch({
    actionType: constants.CREATE,
    text: text
  })
}

/**
 * Update todo.
 *
 * @param {number} id
 * @param {string} text
 *
 * @return {void}
 */
export function updateText (id, text) {
  dispatcher.dispatch({
    actionType: constants.UPDATE_TEXT,
    id: id,
    text: text
  })
}

/**
 * Toggle whether a single todo is complete.
 *
 * @param {object} todo
 *
 * @return {void}
 */
export function toggleCompleted (todo) {
  const { id } = todo
  const actionType = todo.completed ? constants.UNDO_COMPLETED : constants.COMPLETED

  dispatcher.dispatch({
    actionType: actionType,
    id: id
  })
}

/**
 * Mark all todos as complete.
 *
 * @return {void}
 */
export function completeAll () {
  dispatcher.dispatch({
    actionType: constants.TOGGLE_COMPLETE_ALL
  })
}

/**
 * Destroy todo.
 *
 * @param {number} id
 *
 * @return {void}
 */
export function destroy (id) {
  dispatcher.dispatch({
    actionType: constants.DESTROY,
    id: id
  })
}

/**
 * Delete all the completed todos.
 *
 * @return {void}
 */
export function destroyCompleted () {
  dispatcher.dispatch({
    actionType: constants.DESTROY_COMPLETED
  })
}
