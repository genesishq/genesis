/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  CREATE,
  UPDATE,
  TOGGLE_COMPLETED,
  TOGGLE_COMPLETE_ALL,
  DESTROY,
  DESTROY_COMPLETED
} from 'constants'

/**
 * These are actions that triggers the redux reducers.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * Create new todo.
 *
 * @param {string} text
 *
 * @return {object}
 */
export function create (text) {
  return {
    type: CREATE,
    text: text
  }
}

/**
 * Update todo.
 *
 * @param {number} id
 * @param {string} text
 *
 * @return {object}
 */
export function update (id, text) {
  return {
    type: UPDATE,
    id: id,
    text: text
  }
}

/**
 * Destroy todo.
 *
 * @param {number} id
 *
 * @return {object}
 */
export function destroy (id) {
  return {
    type: DESTROY,
    id: id
  }
}

/**
 * Delete all the completed todos.
 *
 * @return {object}
 */
export function destroyCompleted () {
  return {
    type: DESTROY_COMPLETED
  }
}

/**
 * Toggle whether a single todo is complete.
 *
 * @param {object} todo
 *
 * @return {object}
 */
export function toggleCompleted (todo) {
  const { id } = todo

  return {
    type: TOGGLE_COMPLETED,
    id: id
  }
}

/**
 * Toggle all todos as complete.
 *
 * @return {object}
 */
export function toggleCompleteAll () {
  return {
    type: TOGGLE_COMPLETE_ALL
  }
}
