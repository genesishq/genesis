/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './todo-app.scss'

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  create,
  update,
  destroy,
  destroyCompleted,
  toggleCompleted,
  toggleCompleteAll
} from 'actions'

import Intro from '../Intro/Intro'
import Form from '../Form/Form'
import Todo from '../Todo/Todo'
import TodoList from '../TodoList/TodoList'
import Controls from '../Controls/Controls'
import Footer from '../Footer/Footer'

/**
 * This is the TodoApp component class, it operates as a "Controller-View".
 * It listens for changes in the store and passes the new data to its children.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const TodoApp = ({todos, create, update, destroy, destroyCompleted, toggleCompleted, toggleCompleteAll}) => {
  let todoList = null
  let controls = null

  if (todos.length) {
    const total = todos.length
    const completed = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
    const areAllCompleted = todos.every(todo => todo.completed)

    todoList = (
      <TodoList {...{areAllCompleted, toggleCompleteAll}}>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            {...{update, destroy, toggleCompleted}} />
        )}
      </TodoList>
    )

    controls = <Controls {...{total, completed, destroyCompleted}} />
  }

  return (
    <main className='todo-app'>
      <Intro />
      <Form {...{create}} />
      {todoList}
      {controls}
      <Footer />
    </main>
  )
}

TodoApp.proptypes = {
  todos: PropTypes.array,
  create: PropTypes.func,
  update: PropTypes.func,
  destroy: PropTypes.func,
  destroyCompleted: PropTypes.func,
  toggleCompleted: PropTypes.func,
  toggleCompleteAll: PropTypes.func
}

export default connect(
  state => state,
  dispatch => bindActionCreators({
    create,
    update,
    destroy,
    destroyCompleted,
    toggleCompleted,
    toggleCompleteAll
  }, dispatch)
)(TodoApp)
