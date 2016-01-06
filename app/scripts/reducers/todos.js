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

import * as storage from 'utils/localStorage'

/**
 * This is the todo reducer.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default function todos (todos = storage.read('todos') || [], action) {
  let newTodos = todos

  switch (action.type) {
    case CREATE:
      newTodos = [
        {
          id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
          completed: false,
          text: action.text
        },
        ...todos
      ]
      break

    case UPDATE:
      newTodos = todos.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { text: action.text })
          : todo
      )
      break

    case TOGGLE_COMPLETED:
      newTodos = todos.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo
      )
      break

    case TOGGLE_COMPLETE_ALL:
      const areAllCompleted = todos.every(todo => todo.completed)
      newTodos = todos.map(todo => Object.assign({}, todo, {
        completed: !areAllCompleted
      }))
      break

    case DESTROY:
      newTodos = todos.filter(todo =>
        todo.id !== action.id
      )
      break

    case DESTROY_COMPLETED:
      newTodos = todos.filter(todo => todo.completed === false)
      break

    default:
      // no-op
  }

  storage.write('todos', newTodos)
  return newTodos
}
