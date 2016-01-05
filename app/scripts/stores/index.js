/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import objectAssign from 'object-assign'

import { EventEmitter } from 'events'

import dispatcher from 'dispatcher'

import * as constants from 'constants'
import * as storage from 'utils/localStorage'

/**
 * This is the application stores, it handles all application data.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * @const CHANGE_EVENT
 */
const CHANGE_EVENT = 'change'

/**
 * @const todos
 */
const todos = storage.read('todos') || {}

/**
 * Create a todo.
 *
 * @param {string} text
 *
 * @return {void}
 */
function create (text) {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)

  todos[id] = {
    id: id,
    completed: false,
    text: text
  }

  storage.write('todos', todos)
}

/**
 * Update a todo.
 *
 * @param {number} id
 * @param {object} updates An object literal containing only the data to be updated.
 *
 * @return {void}
 */
function update (id, updates) {
  todos[id] = Object.assign({}, todos[id], updates)

  storage.write('todos', todos)
}

/**
 * Update all of the todos with the same object.
 * the data to be updated. Used to mark all todos as completed.
 *
 * @param {object} updates An object literal containing only the data to be updated.
 *
 * @return {void}
 */
function updateAll (updates) {
  for (let id in todos) {
    if (todos.hasOwnProperty(id)) {
      update(id, updates)
    }
  }
}

/**
 * Delete a todo.
 *
 * @param {string} id
 *
 * @return {void}
 */
function destroy (id) {
  delete todos[id]

  storage.write('todos', todos)
}

/**
 * Delete all the completed todos.
 *
 * @return {void}
 */
function destroyCompleted () {
  for (let id in todos) {
    if (todos.hasOwnProperty(id) && todos[id].completed) {
      delete todos[id]
    }
  }

  storage.write('todos', todos)
}

/**
 * This is the store object.
 * It acts as a singleton with methods handle todos.
 */
const store = objectAssign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining todos are marked as completed.
   *
   * @return {boolean}
   */
  getAreAllCompleted () {
    for (let id in todos) {
      if (todos.hasOwnProperty(id) && !todos[id].completed) {
        return false
      }
    }
    return true
  },

  /**
   * Get the entire collection.
   *
   * @return {object}
   */
  getTodos () {
    return todos
  },

  /**
   * Emit a change event to update the state of each listener.
   *
   * @return {void}
   */
  emitChange () {
    this.emit(CHANGE_EVENT)
  },

  /**
   * Add listener to the change event.
   *
   * @param {function} callback
   *
   * @return {void}
   */
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  /**
   * Remove listener from listening to the change event.
   *
   * @param {function} callback
   *
   * @return {void}
   */
  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

/**
 * Actions handler that deals with all actions depending on type.
 *
 * @param {object} action
 *
 * @return {void}
 */
function actionsHandler (action) {
  let text = null

  switch (action.actionType) {
    case constants.CREATE:
      text = action.text.trim()
      if (text !== '') {
        create(text)
        store.emitChange()
      }
      break

    case constants.TOGGLE_COMPLETE_ALL:
      if (store.getAreAllCompleted()) {
        updateAll({completed: false})
      } else {
        updateAll({completed: true})
      }
      store.emitChange()
      break

    case constants.UNDO_COMPLETED:
      update(action.id, {completed: false})
      store.emitChange()
      break

    case constants.COMPLETED:
      update(action.id, {completed: true})
      store.emitChange()
      break

    case constants.UPDATE_TEXT:
      text = action.text.trim()
      if (text !== '') {
        update(action.id, {text: text})
        store.emitChange()
      }
      break

    case constants.DESTROY:
      destroy(action.id)
      store.emitChange()
      break

    case constants.DESTROY_COMPLETED:
      destroyCompleted()
      store.emitChange()
      break

    default:
      // no op
  }
}

/**
 * Register actions handler to the dispatcher.
 */
dispatcher.register(actionsHandler)

export default store
